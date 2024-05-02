import gravatar from "gravatar";

export default function getAvatar(email) {
  const avatarUrl = gravatar.url(email, { s: "200", r: "pg", d: "indenticon" });
  return avatarUrl;
}
