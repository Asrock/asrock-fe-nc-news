const validateUser = ({target}, forceValidation) => {
  target.classList.remove("invalid-input");
  target.classList.remove("valid-input");

  if (!target.value && !forceValidation) return;

  switch (target.id) {
    case "username":
      if (/^[a-z0-9_-]{3,15}$/i.test(target.value))
        return target.classList.add("valid-input");
      break;
    case "avatar_url":
      if (/^$|(?:^(http(s?):)([\/.\w\s\-+_])*\.(?:jpg|gif|png)$)/.test(target.value))
        return target.classList.add("valid-input");
      break;
    case "name":
      if (/^[a-z-\s]{2,15}$/i.test(target.value))
        return target.classList.add("valid-input");
    default: return;
  }
  return target.classList.add("invalid-input");
};

export default validateUser;