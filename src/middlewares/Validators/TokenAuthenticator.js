import jwt from "jsonwebtoken";

const TokenAuthenticator = async (req, res, next) => {
  try {
    // Pegando o token do header
    const token = req.headers.authorization;

    // Validando se o token foi enviado
    if (!token) {
      return res.status(401).json({
        code: 401,
        error: {
          details: "Acesso não autorizado, Token não fornecido",
        },
      });
    }

    // Verificando se o token esta valido ou não
    const decode = await jwt.verify(
      // Separando se tiver o bearer do token
      token.split(" ")[1] || token.split(" ")[0],
      process.env.SECRET,
      (err, data) => {
        if (err) {
          return {
            code: 401,
            error: {
              details: "Token invalido",
            },
          };
        }

        return data;
      }
    );

    // Se deu algum erro na validação do token, enviar a mensagem de erro
    if (decode.error) {
      return res.status(decode.code).json({
        code: decode.code,
        error: {
          details: decode.error.details,
        },
      });
    }

    req.dataAuth = decode;

    return next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      error: {
        details: "Erro interno",
      },
    });
  }
};

export default TokenAuthenticator;
