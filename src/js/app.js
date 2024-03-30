function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export default class ArrayBufferConverter {
  constructor() {
    this.buffer = getBuffer();
  }

  load() {
    if (!this.buffer) {
      throw new Error('Буфер пуст');
    }
    return new Int16Array(this.buffer);
  }

  toString() {
    if (!this.buffer) {
      throw new Error('Буфер пуст');
    }
    const bufferView = new Uint16Array(this.buffer);
    return Array.from(bufferView).map(charCode =>
      String.fromCharCode(charCode)).join('');
  }
}
