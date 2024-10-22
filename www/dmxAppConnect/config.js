dmx.config({
  "index": {
    "idUser": [
      {
        "type": "number",
        "name": "id"
      }
    ],
    "sessao": [
      {
        "type": "text",
        "name": "id"
      }
    ],
    "localStorage": [
      {
        "type": "number",
        "name": "usuario"
      }
    ],
    "redirect": {
      "meta": {},
      "local": [
        {
          "type": "boolean",
          "metaData": {
            "condition": {
              "meta": null,
              "outputType": "number"
            }
          }
        }
      ]
    },
    "id": [
      {
        "type": "number",
        "name": "iduser"
      }
    ]
  },
  "backoffice": {
    "idUser": [
      {
        "type": "number",
        "name": "id"
      }
    ],
    "sessao": [
      {
        "type": "text",
        "name": "id"
      }
    ],
    "localStorage": [
      {
        "type": "number",
        "name": "usuario"
      }
    ],
    "id": [
      {
        "type": "number",
        "name": "iduser"
      }
    ]
  },
  "colaboradores": {
    "listaColaboradores": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "number",
          "name": "isAdmin"
        },
        {
          "type": "number",
          "name": "isColaborador"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "number",
          "name": "isAtivo"
        },
        {
          "type": "text",
          "name": "passSecurity"
        },
        {
          "type": "number",
          "name": "academico"
        },
        {
          "type": "number",
          "name": "administrativo"
        },
        {
          "type": "number",
          "name": "comercial"
        },
        {
          "type": "number",
          "name": "diretoria"
        },
        {
          "type": "number",
          "name": "financeiro"
        },
        {
          "type": "number",
          "name": "marketing"
        },
        {
          "type": "number",
          "name": "atendimento"
        },
        {
          "type": "number",
          "name": "ti"
        },
        {
          "type": "datetime",
          "name": "criado-em"
        },
        {
          "type": "number",
          "name": "criado-por"
        }
      ],
      "outputType": "array"
    },
    "empresa": {
      "meta": null,
      "outputType": "number"
    },
    "criadopor": {
      "meta": null,
      "outputType": "number"
    },
    "data_colaborador": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "number",
          "name": "isAdmin"
        },
        {
          "type": "number",
          "name": "isColaborador"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "number",
          "name": "isAtivo"
        },
        {
          "type": "text",
          "name": "passSecurity"
        },
        {
          "type": "number",
          "name": "academico"
        },
        {
          "type": "number",
          "name": "administrativo"
        },
        {
          "type": "number",
          "name": "comercial"
        },
        {
          "type": "number",
          "name": "diretoria"
        },
        {
          "type": "number",
          "name": "financeiro"
        },
        {
          "type": "number",
          "name": "marketing"
        },
        {
          "type": "number",
          "name": "atendimento"
        },
        {
          "type": "number",
          "name": "ti"
        },
        {
          "type": "datetime",
          "name": "criado-em"
        },
        {
          "type": "number",
          "name": "criado-por"
        }
      ],
      "outputType": "array"
    }
  },
  "times": {
    "rpTImes": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "number",
          "name": "ativo"
        },
        {
          "type": "datetime",
          "name": "criado-em"
        },
        {
          "type": "number",
          "name": "criado-por"
        }
      ],
      "outputType": "array"
    },
    "rpTimes": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "number",
          "name": "ativo"
        },
        {
          "type": "datetime",
          "name": "criado-em"
        },
        {
          "type": "number",
          "name": "criado-por"
        }
      ],
      "outputType": "array"
    },
    "data_time": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "number",
          "name": "ativo"
        },
        {
          "type": "datetime",
          "name": "criado-em"
        },
        {
          "type": "number",
          "name": "criado-por"
        }
      ],
      "outputType": "array"
    },
    "rpMembros": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "times"
        },
        {
          "type": "number",
          "name": "membro"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "number",
          "name": "ativo"
        },
        {
          "type": "text",
          "name": "nome"
        }
      ],
      "outputType": "array"
    }
  }
});
