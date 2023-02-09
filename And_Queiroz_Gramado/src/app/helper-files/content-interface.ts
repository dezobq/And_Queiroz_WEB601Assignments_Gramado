export interface Content {
  id: number; // unique identifier for the content
  title: string; // title of the content
  description: string; //description of the content
  creator: string; //creator of the content
  imgURL?: string; // image url of the content, optional
  type?: string; // type of content, optional
  tags?: string[]; // tags associated with the content, optional
}
