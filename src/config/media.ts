/**
 * Auto-generated Media Assets from Pexels API
 * Project: dot-bid-agent
 * Zero attribution clutter on UI (Enterprise Clean Standard)
 */

export interface PhotoAsset {
  id: string;
  url: string;
  alt: string;
  avg_color: string;
}

export interface VideoAsset {
  id: string;
  videoUrl: string;
  posterUrl: string;
  width: number;
  height: number;
}

export interface MediaConfig {
  caseStudyPhoto: PhotoAsset;
  editorialPhotos: PhotoAsset[];
  ambientVideo: VideoAsset;
}

export const mediaConfig: MediaConfig = {
  caseStudyPhoto: {
    "id": "39542121",
    "url": "https://images.pexels.com/photos/39542121/pexels-photo-39542121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Yellow road grader leveling a dirt road in rural area on a sunny day.",
    "avg_color": "#969694"
},
  editorialPhotos: [
    {
    "id": "32572803",
    "url": "https://images.pexels.com/photos/32572803/pexels-photo-32572803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "A bulldozer leveling a road in Werlte, Niedersachsen, Germany under a clear sky.",
    "avg_color": "#A9AAAC"
},
    {
    "id": "32576698",
    "url": "https://images.pexels.com/photos/32576698/pexels-photo-32576698.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Powerful construction machine operating on a road site in Werlte, Germany.",
    "avg_color": "#9E9993"
},
    {
    "id": "12758027",
    "url": "https://images.pexels.com/photos/12758027/pexels-photo-12758027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Aerial view of trucks on a construction site with orange soil and earthworks.",
    "avg_color": "#C18978"
}
  ],
  ambientVideo: {
    "id": "30815309",
    "videoUrl": "https://videos.pexels.com/video-files/30815309/13179608_640_360_60fps.mp4",
    "posterUrl": "https://images.pexels.com/videos/30815309/freeway-roads-30815309.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    "width": 640,
    "height": 360
}
};
