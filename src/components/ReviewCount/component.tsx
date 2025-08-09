import { type ReviewCountProps } from './props';

export function ReviewCount({ torrent }: ReviewCountProps) {
  const totalReviews: number = torrent.reviews.positive + torrent.reviews.negative;

  return (
    <>
      {Intl.NumberFormat().format(totalReviews)}
    </>
  );
}
