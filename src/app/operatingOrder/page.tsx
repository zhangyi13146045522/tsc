"use client";
import { useState, createElement, FunctionComponent, ComponentClass, useImperativeHandle, useRef, forwardRef, useEffect} from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button'
import { Form, Field, useForm, createForm} from 'react-final-form';

import "./page.scss"

interface FormItemDescribe {
  label?:string;
  component: FunctionComponent | ComponentClass | string;
  props?: any;
  children?: Array<FormItemDescribe>;
  name:string;
}

type CustomRequired<T, K extends keyof T> = {
  [P in K]-?: T[P];
} & Omit<T, K>


type FormItemDescribeRequired = CustomRequired<FormItemDescribe, 'name' | 'component'>


function FormItem(describe: FormItemDescribeRequired) {
  const {
    label,
    component,
    props,
    children=[],
    name,
  } = describe

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
      return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
  };

  return (
    <Field name={name} render={({input, meta}) => {
      return (
        <div className="flex flex-column gap-2">
          <label htmlFor={label}>{label}</label>
          {createElement(component, {
            ...props,
            ...input,
          }, children.map(desc => FormItem(desc)))}
          <span>{getFormErrorMessage(meta)}</span>
        </div>
      )
    }}>
    </Field>
    
  )
}


const FormContent = ({handleSubmit, action}) => {
  // const formApi = useForm()
  // useEffect(() => {
  //   switch(action.type) {
  //     case 'CLEAR':
  //       formApi.restart();
  //       break;
  //     case 'UPDATE':
  //       break;
  //     default:
  //   }
  // }, [action])

  return (
    <form onSubmit={handleSubmit} >
      <FormItem name='orderID' component={InputText} label='Order ID'/>
      <FormItem name='clientOrderID' component={InputText} label='Client Order ID'/>
      <Button type="submit" label="Submit" className="mt-2" />
    </form>
  )
}


export default function OperatingOrder() {
  const [formData, setFormData] = useState({
    orderID: '1111'
  })
  const [action, setAction] = useState({})
  const onSubmit = (data, form) => {
    
  }

  const onRestart = () => {
    setAction({
      type: 'CLEAR',
    })
  }

  const validate = (data) => {
    let errors = {};

    if (data.orderID && data.orderID.length > 25) {
        errors.orderID = 'no longer than 255 characters ';
    }
    if (data.clientOrderID && data.clientOrderID.length > 25) {
      errors.clientOrderID = 'no longer than 255 characters ';
    }

    return errors;
};
 

 return (
    <>
      <Form onSubmit={onSubmit} validate={validate} render={FormContent}>
      </Form>
      <Button label="Restart" className="mt-2" onClick={onRestart}/>
    </>
  )
}
