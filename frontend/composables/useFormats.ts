import { UploadChangeParam } from "ant-design-vue";

export const useFormats = () => {
  const toCurrency = (value: any) => {
    return new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
    }).format(value);
  };

  const convertToFile = (info: UploadChangeParam) => {
    const file = info.file as any;
    const fileConvert = new File([file.originFileObj] as any, file.name, {
      type: file.type,
      lastModified: file.lastModified,
    });
    return fileConvert;
  };

  return {
    toCurrency,
    convertToFile,
  };
};
