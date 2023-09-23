import { useTheme } from "@emotion/react";

export const ComponentFormState = ({ children, formState, fieldName }) => {
  const error = formState.errors[fieldName];
  const theme = useTheme();
  return (
    <div>
      {children}
      {error && (
        <p
          style={{
            color: theme.palette.error.main,
            marginTop: 5,
          }}
        >
          {error?.message}
        </p>
      )}
    </div>
  );
};
