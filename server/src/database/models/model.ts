export interface Task {
  id: Number,
  userid: Number,
  description: String,
  tag: Number,
  files: Object,
  members: Object,
  comments: Object
  boardid: Number
  tagid: Number
}


export interface APIResponse<Data> {
  data?: Data
  message: string
}
