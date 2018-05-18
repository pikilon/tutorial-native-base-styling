import variable from "../../variables/platform";

export default (variables = variable) => ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      color: variables.brandPrimary
  }
});

