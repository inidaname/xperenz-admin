/**
 * Route not found error
 * @function notFound
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 * @returns {void}
 */

export const notFound = (req, res, next) => {
  const err = new Error("Route not found")
  err.status = 404;
  next(err)
}

/**
 * Dev error handling
 * @function developmentErrors
 * @param {Error} err
 * @param {import("express").Request} req 
 * @param {import("express").Response} res
 * @returns {void}
 */

export const developmentErrors = (err, req, res) => {
  err.stack = err.stack || '';
  const errorDetails = {
    // message: err.message,
    stackHighlighted: err.stack.replace(
      /[a-z_-\d]+.js:\d+:\d+/gi,
      '<mark>$&</mark>',
    ),
  };

  res.status(err.status || 500);
  res.format({
    // Form Submit, Reload the page
    'application/json': () => res.json(errorDetails), // Ajax call, send JSON back
    // Based on the `Accept` http header
    'text/html': () => {
      res.json(errorDetails);
    },
  });
};

/*
  Production Error Handler
*/
export const productionErrors = (err, req, res) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
      error: {},
    },
  });
};