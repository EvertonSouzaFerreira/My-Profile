import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import { ContainerContact, ContainerCardsContact,ContainerForm, CardContact, InputInfos, Textarea, BtnSend,MainContact  } from './ContactStyled'


interface FormValues {
    nome: string;
    email: string;
    message: string;
  }

const Contact:React.FC = () => {
    const [formValues, setFormValues] = useState<FormValues>({ nome: '', email: '', message: '' });

    const form = useRef<HTMLFormElement>(null)

    const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const form = new FormData(e.currentTarget);

        const formValues: FormValues = {
            nome: form.get('nome') as string,
            email: form.get('email') as string,
            message: form.get('message') as string,
          };


        const emailData = {
            ...formValues,
          };

            emailjs.send('service_j2k8j1n', 'template_g9o7osm', emailData, 'XQlEspWzfFC4Ax7nQ')
              .then((result) => {
                  console.log(result.text);
                  setFormValues({ nome: '', email: '', message: '' }); 
              }, (error) => {
                  console.log(error.text);
              });
      };

    

  return (
    <MainContact id='contact'>
    <h2 style={{textAlign: 'center', margin: 0}}>Contate-me</h2>
    <ContainerContact>
    
        <ContainerCardsContact>
        
            <CardContact>
                <p>Email</p>
                <p style={{fontSize: '10px'}}>evertonsouzaferreira8@gmail.com</p>
                <p>Enviar menssagem</p>
            </CardContact>
            <CardContact>
                <p>WhatsApp</p>
                <p>+31 6 87954793</p>
                <p>Enviar menssagem</p>
            </CardContact>
        </ContainerCardsContact>
        <ContainerForm ref={form} onSubmit={sendEmail}>
            <InputInfos type="text" name='nome' placeholder='Nome Completo' value={formValues.nome} onChange={(event) => setFormValues({ ...formValues, nome: event.target.value })} required />
            <InputInfos type="email" name='email' placeholder='Seu Email' value={formValues.email} onChange={(event) => setFormValues({ ...formValues, email: event.target.value })} required />
            <Textarea id='message' name="message" value={formValues.message} onChange={(event) => setFormValues({ ...formValues, message: event.target.value })} required/>
            <BtnSend type='submit'>Enviar Mensagem</BtnSend>
        </ContainerForm>

    </ContainerContact>
    </MainContact>
    
  )
}

export default Contact