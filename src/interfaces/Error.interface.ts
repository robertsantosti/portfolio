import React from 'react';

export interface IError {
  id?: number,
  title: string,
  description: string,
  code?: string,
}

export interface IErrorContext {
  error: IError | null;
  setError: React.Dispatch<React.SetStateAction<IError>>;
}