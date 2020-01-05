// Deve possuir métodos com a responsabilidade de lidar com arquivos de forma genérica

type DefaultFile = {
  name: string;
  file: BufferSource;
}

export const saveFile = async (file: DefaultFile) => 'sucesso'

export const getFile = async (address: string) => 'sucesso'
