export const avatarTouchMessage = (avatarTouchCount: number) => {
  if (avatarTouchCount < 2) {
    return '😖 Hey! Stop touching my face!';
  }
  if (avatarTouchCount < 5) {
    return '😠 I said STOP!';
  }
  if (avatarTouchCount < 7) {
    return '🥺 Hey...';
  }
  if (avatarTouchCount < 10) {
    return "🙏 I'm begging you now...";
  }
  return "🏆 You win! I'll give you my project link now!";
};
