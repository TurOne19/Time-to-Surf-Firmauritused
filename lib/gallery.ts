export interface GalleryItem {
  id: string;
  index: number;
  type: "photo" | "video";
  src: string;
  poster?: string;
}

// Sand/ocean toned gradient pairs used to give each placeholder tile a
// slightly different, hand-picked mood until real media is dropped in.
const tones: [string, string][] = [
  ["#123641", "#0C2630"],
  ["#1B4552", "#123641"],
  ["#2C5A54", "#123641"],
  ["#C4924A", "#8A5A2E"],
  ["#C97066", "#8C4640"],
  ["#6E9C90", "#2C5A54"],
  ["#D9A94E", "#8A5A2E"],
];

export const PHOTO_COUNT = 63;
export const VIDEO_COUNT = 4;

export function getGalleryItems(): GalleryItem[] {
  const photos: GalleryItem[] = Array.from({ length: PHOTO_COUNT }, (_, i) => ({
    id: `photo-${i + 1}`,
    index: i + 1,
    type: "photo",
    src: `/gallery/photo-${String(i + 1).padStart(2, "0")}.jpg`,
  }));

  const videos: GalleryItem[] = Array.from({ length: VIDEO_COUNT }, (_, i) => ({
    id: `video-${i + 1}`,
    index: i + 1,
    type: "video",
    src: `/gallery/video-${String(i + 1).padStart(2, "0")}.mp4`,
    poster: `/gallery/video-${String(i + 1).padStart(2, "0")}-poster.jpg`,
  }));

  // Interleave a video roughly every 15 photos so the grid does not clump
  // all videos in one place once real files are added.
  const merged: GalleryItem[] = [];
  let vi = 0;
  photos.forEach((p, i) => {
    merged.push(p);
    if ((i + 1) % 15 === 0 && vi < videos.length) {
      merged.push(videos[vi]);
      vi += 1;
    }
  });
  while (vi < videos.length) {
    merged.push(videos[vi]);
    vi += 1;
  }
  return merged;
}

export function toneFor(index: number): [string, string] {
  return tones[index % tones.length];
}
