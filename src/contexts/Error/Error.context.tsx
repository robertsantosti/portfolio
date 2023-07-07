import { createContext, useState } from 'react';
import { IError, IErrorContext } from '../../interfaces/Error.interface';
import { IChildren } from '../../utils/interfaces/context';

export const ErrorContext = createContext<IErrorContext>({
  error: null,
  setError: () => { return },
});

export const ErrorProvider = ({ children }: IChildren) => {
  const [ error, setError ] = useState<IError>({
    title: 'Oops!',
    description: 'Não conseguimos encontrar a página que você procura.',
    code: '404'
  });

  return(
    <ErrorContext.Provider value={{ error, setError}}>
      { children } 
    </ErrorContext.Provider>
  );
}