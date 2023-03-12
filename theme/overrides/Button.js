// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: "linear-gradient(260.66deg, #7742E9 7.06%, #C736EB 92.94%)",
          borderRadius: "44px"
        },
        outlinedInfo:{
          borderRadius: "44px"
        },
        containedError: {
          borderRadius: "44px"
        },
      },
    },
  };
}
