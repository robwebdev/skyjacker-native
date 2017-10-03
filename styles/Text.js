const BaseTextStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: 14,
  backgroundColor: "transparent"
};

const TextStyles = {
  text: {
    ...BaseTextStyle
  },
  largeText: {
    ...BaseTextStyle,
    fontSize: 18,
    lineHeight: 20
  },
  centeredText: {
    ...BaseTextStyle,
    textAlign: "center"
  }
};

export default TextStyles;
