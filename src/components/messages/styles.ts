import errorIcon from "@assets/images/error-icon.svg";
import infoIcon from "@assets/images/info-icon.svg";
import successIcon from "@assets/images/success-icon.svg";
import warningIcon from "@assets/images/warning-icon.svg";
import { makeStyles } from "@material-ui/core/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";

const successColor = "#60DAA0";
const warningColor = "#FFB84E";
const infoColor = "#CAD8DF";

export const useStyles = makeStyles(
  theme => ({
    "@keyframes bar": {
      from: { transform: "translateX(-100%)" },
      to: { transform: "translateX(0)" }
    },
    actionContainer: {
      marginLeft: -8
    },
    closeBtn: {
      "& svg": {
        maxHeight: 18,
        maxWidth: 18
      },
      color: "#fff",
      padding: 10,
      position: "absolute",
      right: 5,
      top: 7
    },
    closeBtnInfo: {
      color: theme.palette.text.primary
    },
    error: {
      "& > div": {
        "& button span": {
          color: "#fff"
        }
      },
      "& > div:first-child": {
        "&:before": {
          backgroundImage: `url(${errorIcon})`
        }
      },
      backgroundColor: theme.palette.error.main,
      color: "#fff"
    },
    expandBtn: {
      "&:before": {
        borderLeft: "4px solid transparent",
        borderRight: "4px solid transparent",
        borderTop: "8px solid #fff",
        content: "''",
        display: "block",
        height: 0,
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        width: 0
      },
      background: "transparent",
      border: "none",
      color: "#fff",
      cursor: "pointer",
      fontSize: theme.spacing(2),
      outline: "none",
      padding: 0,
      paddingRight: 15,
      position: "relative"
    },
    expandBtnInfo: {
      "&:before": {
        borderTop: `8px solid ${theme.palette.text.primary}`
      },
      color: theme.palette.text.primary
    },
    expandedContainer: {
      "& p": {
        margin: theme.spacing(1, 0)
      },
      color: "#fff",
      marginBottom: 5
    },
    expandedContainerContent: {
      overflow: "hidden",
      transition: "max-height .6s ease"
    },
    expandedContainerInfo: {
      color: theme.palette.text.secondary
    },
    expandedText: {
      maxHeight: 500
    },
    hiddenText: {
      maxHeight: 0
    },
    info: {
      "& > div:first-child": {
        "&:before": {
          backgroundImage: `url(${infoIcon})`
        }
      }
    },
    progressBar: {
      backgroundColor: infoColor,
      height: 8,
      transform: "translateX(-100%)",
      width: "100%"
    },
    progressBarActive: {
      animation: `$bar var(--animationTime) ease both`
    },
    progressBarContainer: {
      borderRadius: "0 0 4px 4px",
      bottom: 0,
      left: 0,
      overflow: "hidden",
      position: "absolute",
      width: "calc(100%)"
    },
    progressBarError: {
      backgroundColor: darken(theme.palette.error.main, 0.2)
    },
    progressBarSuccess: {
      backgroundColor: darken(successColor, 0.2)
    },
    progressBarWarning: {
      backgroundColor: darken(warningColor, 0.2)
    },
    snackbar: {
      "& > div": {
        paddingLeft: 60
      },
      "& > div:first-child": {
        "&:before": {
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          content: "''",
          display: "block",
          height: 32,
          left: 15,
          position: "absolute",
          top: 13,
          width: 32
        },
        paddingTop: 16,
        position: "relative"
      },
      borderRadius: 4,
      paddingBottom: 15
    },
    snackbarContainer: {
      borderRadius: 4,
      display: "block",
      margin: theme.spacing(2, 2, 0, 0),
      maxWidth: 480,
      pointerEvents: "all",
      position: "relative"
    },
    success: {
      "& > div:first-child": {
        "&:before": {
          backgroundImage: `url(${successIcon})`
        }
      },
      "& button span": {
        color: "#fff"
      },
      backgroundColor: successColor,
      color: "#fff"
    },
    text: {
      color: "#fff",
      paddingTop: 5
    },
    textInfo: {
      paddingTop: 5
    },
    warning: {
      "& > div:first-child": {
        "&:before": {
          backgroundImage: `url(${warningIcon})`
        }
      },
      "& button span": {
        color: "#fff"
      },
      backgroundColor: warningColor,
      color: "#fff"
    }
  }),
  { name: "MessageManager" }
);
