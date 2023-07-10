import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface IInputProps {
  label: string,
  title: string,
  type?: 'text' | 'number' | 'email' | 'textarea',
  error?: FieldError,
  info?: string,
  color?: string,
  placeholder?: string,
  register?: UseFormRegisterReturn,
  watch?: string,
  length?: {
    min?: number;
    max?: number;
  }
}