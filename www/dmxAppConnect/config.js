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
  },
  "projetos": {
    "rpProjetos": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome-projeto"
        },
        {
          "type": "text",
          "name": "descricao-projeto"
        },
        {
          "type": "number",
          "name": "times"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "number",
          "name": "responsavel"
        },
        {
          "type": "datetime",
          "name": "criado-em"
        },
        {
          "type": "number",
          "name": "criado-por"
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
    },
    "data_projeto": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome-projeto"
        },
        {
          "type": "text",
          "name": "descricao-projeto"
        },
        {
          "type": "number",
          "name": "times"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "number",
          "name": "responsavel"
        },
        {
          "type": "datetime",
          "name": "criado-em"
        },
        {
          "type": "number",
          "name": "criado-por"
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
    },
    "rpTarefa": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "datetime",
          "name": "criado-em"
        },
        {
          "type": "text",
          "name": "titulo"
        },
        {
          "type": "number",
          "name": "criado-por"
        },
        {
          "type": "text",
          "name": "descricao-tarefa"
        },
        {
          "type": "number",
          "name": "status"
        },
        {
          "type": "date",
          "name": "data-inicio"
        },
        {
          "type": "date",
          "name": "data-fim"
        },
        {
          "type": "number",
          "name": "projeto"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "number",
          "name": "responsavel"
        }
      ],
      "outputType": "array"
    },
    "rpTarefas": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "datetime",
          "name": "criado-em"
        },
        {
          "type": "text",
          "name": "titulo"
        },
        {
          "type": "number",
          "name": "criado-por"
        },
        {
          "type": "text",
          "name": "descricao-tarefa"
        },
        {
          "type": "number",
          "name": "status"
        },
        {
          "type": "date",
          "name": "data-inicio"
        },
        {
          "type": "date",
          "name": "data-fim"
        },
        {
          "type": "number",
          "name": "projeto"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "number",
          "name": "responsavel"
        },
        {
          "type": "text",
          "name": "tarefa-status"
        }
      ],
      "outputType": "array"
    },
    "data_tarefas": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "datetime",
          "name": "criado-em"
        },
        {
          "type": "text",
          "name": "titulo"
        },
        {
          "type": "number",
          "name": "criado-por"
        },
        {
          "type": "text",
          "name": "descricao-tarefa"
        },
        {
          "type": "number",
          "name": "status"
        },
        {
          "type": "date",
          "name": "data-inicio"
        },
        {
          "type": "date",
          "name": "data-fim"
        },
        {
          "type": "number",
          "name": "projeto"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "number",
          "name": "responsavel"
        },
        {
          "type": "text",
          "name": "tarefa-status"
        }
      ],
      "outputType": "array"
    },
    "data_atividades": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "projeto"
        },
        {
          "type": "number",
          "name": "tarefa"
        },
        {
          "type": "text",
          "name": "descricao-atividade"
        },
        {
          "type": "date",
          "name": "criadoem"
        },
        {
          "type": "number",
          "name": "criadopor"
        },
        {
          "type": "number",
          "name": "tipo"
        }
      ],
      "outputType": "array"
    },
    "rpNotasAtividades": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "projeto"
        },
        {
          "type": "number",
          "name": "tarefa"
        },
        {
          "type": "text",
          "name": "descricao-atividade"
        },
        {
          "type": "date",
          "name": "criadoem"
        },
        {
          "type": "number",
          "name": "criadopor"
        },
        {
          "type": "number",
          "name": "tipo"
        },
        {
          "type": "text",
          "name": "link"
        },
        {
          "type": "date",
          "name": "data-reuniao"
        }
      ],
      "outputType": "array"
    },
    "data": {
      "outputType": "text"
    }
  }
});
