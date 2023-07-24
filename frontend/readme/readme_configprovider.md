# Config provider of Ant Design

```vue
<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: data.colorPrimary,
        borderRadius: `${data.borderRadius}px`,
      },
    }"
  >
    <a-form
      :model="data"
      name="theme"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
    >
      <a-form-item name="colorPrimary" label="Primary Color">
        <input
          type="color"
          :value="data.colorPrimary"
          @input="(e) => (data.colorPrimary = e.target.value)"
        />
      </a-form-item>
      <a-form-item name="borderRadius" label="Border Radius">
        <a-input v-model:value="data.borderRadius" />
      </a-form-item>
      <a-form-item name="submit" :wrapper-col="{ offset: 4, span: 20 }">
        <a-button type="primary">submit</a-button>
      </a-form-item>
    </a-form>
  </a-config-provider>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { theme } from "ant-design-vue";

const defaultData = {
  borderRadius: 6,
  colorPrimary: "#1677ff",
};
const data = ref(defaultData);
const { token } = theme.useToken();
</script>
<style scoped>
input[type="color"] {
  border: 1px solid v-bind("token.colorBorder");
  background-color: v-bind("token.colorBgBase");
}
</style>
```

(references)[https://www.antdv.com/components/config-provider]
