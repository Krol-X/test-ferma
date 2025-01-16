export const findIndexById = (array, id) => (array.findIndex(it => it.id === id))

export class StringEnum {
  constructor(...values) {
    if (!values?.every((v) => typeof v === 'string')) {
      throw new Error('All values in StringEnum must be strings');
    }

    values.forEach((value) => {
      this[value] = value;
    });

    this._values = new Set(values);
  }

  has(value) {
    return this._values.has(value);
  }
}
