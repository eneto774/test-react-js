export interface PostSubreddit {
  kind: string;
  data: Data;
}

export interface Data {
  approved_at_utc: any;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: any;
  gilded: number;
  clicked: boolean;
  is_gallery: boolean;
  title: string;
  link_flair_richtext: any[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: any;
  downs: number;
  thumbnail_height: number;
  top_awarded_type: any;
  hide_score: boolean;
  media_metadata: MediaMetadata;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  upvote_ratio: number;
  author_flair_background_color: any;
  ups: number;
  domain: string;
  media_embed: MediaEmbed;
  thumbnail_width: number;
  author_flair_template_id: any;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: any;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: any;
  secure_media_embed: SecureMediaEmbed;
  gallery_data: GalleryData;
  link_flair_text: any;
  can_mod_post: boolean;
  score: number;
  approved_by: any;
  is_created_from_ads_ui: boolean;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class: any;
  author_flair_richtext: any[];
  gildings: Gildings;
  content_categories: any;
  is_self: boolean;
  subreddit_type: string;
  created: number;
  link_flair_type: string;
  wls: number;
  removed_by_category: any;
  banned_by: any;
  author_flair_type: string;
  total_awards_received: number;
  allow_live_comments: boolean;
  selftext_html: any;
  likes: any;
  suggested_sort: any;
  banned_at_utc: any;
  url_overridden_by_dest: string;
  view_count: any;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  all_awardings: any[];
  awarders: any[];
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: any;
  treatment_tags: any[];
  visited: boolean;
  removed_by: any;
  mod_note: any;
  distinguished: any;
  subreddit_id: string;
  author_is_blocked: boolean;
  mod_reason_by: any;
  num_reports: any;
  removal_reason: any;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: any;
  author: string;
  discussion_type: any;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: string;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color: any;
  permalink: string;
  parent_whitelist_status: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: any;
  is_video: boolean;
}

export interface MediaMetadata {
  nrbdosolb1vd1: Nrbdosolb1vd1;
  mdfaf7rkb1vd1: Mdfaf7rkb1vd1;
}

export interface Nrbdosolb1vd1 {
  status: string;
  e: string;
  m: string;
  p: P[];
  s: S;
  id: string;
}

export interface P {
  y: number;
  x: number;
  u: string;
}

export interface S {
  y: number;
  x: number;
  u: string;
}

export interface Mdfaf7rkb1vd1 {
  status: string;
  e: string;
  m: string;
  p: P2[];
  s: S2;
  id: string;
}

export interface P2 {
  y: number;
  x: number;
  u: string;
}

export interface S2 {
  y: number;
  x: number;
  u: string;
}

export interface MediaEmbed {}

export interface SecureMediaEmbed {}

export interface GalleryData {
  items: Item[];
}

export interface Item {
  media_id: string;
  id: number;
}

export interface Gildings {}
