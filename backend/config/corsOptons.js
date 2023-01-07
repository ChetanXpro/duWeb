

const allowedOrigins = ["http://localhost:3000","http://localhost:5173","https://frontend-role-auth-flow.vercel.app"];



const corsOption = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not alowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOption;
