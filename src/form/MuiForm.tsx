import { Backdrop, Box, CircularProgress, SxProps, Theme } from "@mui/material";
import { useState, JSX, useTransition, useRef } from "react";

export function MuiForm({
  children,
  muiformHook,
  sx,
}: {
  children: JSX.Element | Array<JSX.Element | undefined>;
  muiformHook?: muiformhook;
  sx?: SxProps<Theme>;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [, startTransition] = useTransition();
  const ruleset = muiformHook?.ruleset || {};
  const submitRef = useRef<HTMLInputElement>();

  if (muiformHook)
    muiformHook.submit = muiformHook
      ? () => {
          submitRef.current?.click();
        }
      : () => {};

  return (
    <Box
      component="form"
      sx={{
        ...sx,
        "& .MuiTextField-root": {
          m: 1,
          width: "25ch",
        },
      }}
      action={muiformHook && (muiformHook.serverAction as any)}
      onSubmit={async (event) => {
        if (loading) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        setLoading(true);
        event.preventDefault();
        muiformHook?.reset();
        let hasError = false;
        const form = new (FormData as any)(event.currentTarget) as FormData;
        for await (const name of Object.keys(ruleset)) {
          const value = form.get(name)?.toString() || "";
          const rule = ruleset[name];
          if (
            !rule(value, form, (value: Array<string>) => {
              muiformHook?.set(formatVals(value));
              hasError = true;
            })
          ) {
            muiformHook?.set({ [name]: true });
            hasError = true;
          }
        }
        let data: { [key: string]: string } = {};
        form.forEach((val, key) => {
          data[key] = val.toString();
        });
        if (!hasError && muiformHook?.onSuccess) {
          await muiformHook.onSuccess(data, (names: Array<string>) => {
            muiformHook.set(formatVals(names));
          });
        }
        if (!hasError) {
          startTransition(() => {
            const res = muiformHook?.serverAction
              ? muiformHook.serverAction({
                  data: data,
                  setError: (names: Array<string>) => {
                    muiformHook.set(formatVals(names));
                  },
                })
              : undefined;

            res?.then(() => setLoading(false));
          });
        } else setLoading(false);
      }}
    >
      {children}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <input type="submit" hidden ref={submitRef as any} />
    </Box>
  );
}

function formatVals(names: Array<string>) {
  let formated: { [key: string]: boolean } = {};
  for (const val of names) {
    formated[val] = true;
  }
  return formated;
}
export function useMuiForm({
  ruleset,
  onSuccess,
  serverAction,
}: {
  ruleset: ruleStructure;
  onSuccess?: muiformhook["onSuccess"];
  serverAction?: muiformhook["serverAction"];
}) {
  const [error, seterror] = useState<{ [key: string]: boolean }>({});

  return {
    set: (name: { [key: string]: boolean }) => {
      seterror((current) => {
        return {
          ...current,
          ...name,
        };
      });
    },
    reset: () => {
      seterror(() => {
        return {};
      });
    },
    ruleset: ruleset,
    status: (name: string) => {
      return error[name];
    },
    onSuccess: onSuccess,
    serverAction: serverAction,
  } as muiformhook;
}

export interface muiformhook {
  set: (name: { [key: string]: boolean }) => void;
  reset: () => void;
  status: (name: string) => boolean;
  ruleset: ruleStructure;
  onSuccess?: (
    data: { [key: string]: string },
    setError: (names: Array<string>) => void
  ) => Promise<void>;

  serverAction?: ({
    data,
    setError,
  }: {
    data: { [key: string]: string };
    setError: (names: Array<string>) => void;
  }) => Promise<void>;
  submit: () => void;
}

export interface ruleStructure {
  [key: string]: ruleCallback["callback"];
}
interface ruleCallback {
  callback: (
    value: string,
    formData: FormData,
    setError: (names: Array<string>) => void
  ) => boolean;
}
