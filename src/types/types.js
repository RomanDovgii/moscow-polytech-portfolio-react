import PropTypes from "prop-types";

export const promoType = {
  isCheck: PropTypes.bool,
  isLogin: PropTypes.bool,
  isMain: PropTypes.bool,
  isProject: PropTypes.bool,
  isSignup: PropTypes.bool,
  isUpload: PropTypes.bool,
  isStudent: PropTypes.bool
};

export const loginType = {
  block: PropTypes.string
};

export const catalogType = {
  cardCount: PropTypes.number,
  isProject: PropTypes.bool
};

export const controlsType = {
  isStudent: PropTypes.bool
};
