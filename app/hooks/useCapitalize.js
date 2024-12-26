const useCapitalize = () => {
  const capitalize = (string) => {
    if (typeof string === "string" && string.length > 0) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return ""; // Devuelve una cadena vacía si no es válida
  };

  return { capitalize };
};

export default useCapitalize;