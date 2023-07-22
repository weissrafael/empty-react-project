export const formatTime = (timestampStr: string): string => {
  const timestamp = new Date(timestampStr);
  const now = new Date();

  const diffInSeconds = Math.floor(
    (now.getTime() - timestamp.getTime()) / 1000
  );
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInSeconds < 20) return 'a few seconds ago';
  if (diffInHours < 1)
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  if (diffInDays < 1)
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  if (diffInDays === 1) return 'yesterday';
  if (diffInWeeks < 1)
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  if (diffInMonths < 1)
    return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
  if (diffInYears < 1)
    return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;

  return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
};
