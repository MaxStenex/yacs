type PrimitiveArgument = string | number | boolean | undefined | null;

type DictionaryArgument = Record<string, PrimitiveArgument>;

type Argument = DictionaryArgument | PrimitiveArgument;

type Params = DictionaryArgument | PrimitiveArgument | Argument;

export const classNames = (...args: Params[]): string => {
  let result = "";

  args.forEach((argument) => {
    if (!argument) return;

    if (typeof argument === "object") {
      for (let key in argument) {
        const shouldAppendValue = !!argument[key];

        if (!shouldAppendValue) continue;

        result += `${key} `;
      }

      return;
    }

    result += `${argument} `;
  });

  return result.trim();
};
