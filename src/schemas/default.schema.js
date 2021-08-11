class DefaultSchema {
  constructor(schema = {}) {
    this.type = schema.type || 'object';
    this.properties = schema.properties || {};
    this.required = schema.required || [];
    if (schema.$id) {
      this.$id = schema.$id;
    }
    this.additionalProperties = schema.additionalProperties || false;
  }

  get fullShcmema() {
    return {
      type: this.type,
      properties: this.properties,
      required: this.required,
      ...(this.$id && { $id: this.$id }),
      additionalProperties: this.additionalProperties,
    };
  }

  /**
   *
   * @param {{properties: string[], required: string[]}} options;
   */
  schema(options = { required: [], properties: [] }) {
    const data = this.fullShcmema;
    if (options.properties.length) {
      const properties = {};
      const required = [];
      for (const key in data.properties) {
        if (options.properties.includes(key)) properties[key] = data.properties[key];
      }
      options.required.forEach((e) => {
        if (Object.keys(properties).includes(e)) required.push(e);
      });
      data.required = required;
      data.properties = properties;
    }
    return data;
  }
}

export default DefaultSchema;
