import { Field, FileField } from '@/lib/component-props';

export interface DownloadItem {
  title: Field<string>;
  description?: Field<string>;
  category?: Field<string>;
  fileType?: Field<string>;
  fileSize?: Field<string>;
  file?: FileField;
}

export interface DownloadsFields {
  title?: Field<string>;
  subtitle?: Field<string>;
  items: DownloadItem[];
}
