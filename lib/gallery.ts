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

const photoFiles = [
  "DSC_8879.jpg", "DSC_8897.jpg", "DSC_8900.jpg", "DSC_8938.jpg",
  "DSC_8978.jpg", "DSC_8986.jpg", "DSC_8989.jpg", "DSC_9001.jpg",
  "DSC_9017.jpg", "IMG_8779.JPG", "IMG_8781.JPG", "IMG_8785.JPG",
  "IMG_8818.JPG", "IMG_9183.JPG",
];

export function getGalleryItems(): GalleryItem[] {
  const photos: GalleryItem[] = photoFiles.map((file, i) => ({
    id: `photo-${i + 1}`,
    index: i + 1,
    type: "photo",
    src: `/gallery/${file}`,
  }));

  const videos: GalleryItem[] = [{
    id: "video-1", index: 1, type: "video", src: "/gallery/IMG_8820.mp4",
    poster: "/gallery/DSC_8900.jpg",
  }];

  // Interleave a video roughly every 15 photos so the grid does not clump
  // all videos in one place once real files are added.
  const merged: GalleryItem[] = [];
  let vi = 0;
  photos.forEach((p, i) => {
    merged.push(p);
    if ((i + 1) % 7 === 0 && vi < videos.length) {
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
