import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import gitHubIcon from '../../imgs/githubSimbol.png'
import linkedinImg from '../../imgs/linkedinImg.png'
import { AiFillLinkedin } from 'react-icons/ai';

import { ContainerContact, ContainerCardsContact,ContainerForm, CardContact, InputInfos, Textarea, BtnSend,MainContact  } from './ContactStyled'


interface FormValues {
    nome: string;
    email: string;
    message: string;
  }

  interface ChidrensProps{
    tradutor: boolean;
  }

const Contact:React.FC<ChidrensProps> = ({tradutor}) => {
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
    <MainContact>
    
    <ContainerContact id='contact'>
    {tradutor? <h2>Contate-me</h2>: <h2>Contact me</h2>}
        <ContainerForm ref={form} onSubmit={sendEmail}>
            <InputInfos type="text" name='nome' placeholder='Name' value={formValues.nome} onChange={(event) => setFormValues({ ...formValues, nome: event.target.value })} required />
            <InputInfos type="email" name='email' placeholder={tradutor? "Seu Email": 'Your Email'} value={formValues.email} onChange={(event) => setFormValues({ ...formValues, email: event.target.value })} required />
            <Textarea id='message' name="message" value={formValues.message} onChange={(event) => setFormValues({ ...formValues, message: event.target.value })} required/>
            <BtnSend type='submit'>{tradutor? "Enviar Mensagem": 'Send Message'}</BtnSend>
        </ContainerForm>

    </ContainerContact>
    <ul>
      <li style={{fontSize: '14px', display: 'flex', gap: '1rem', alignItems: 'center'}}><img style={{width: 'px'}} src={gitHubIcon} alt="" /><a style={{color: '#FFF'}} href="https://github.com/EvertonSouzaFerreira">https://github.com/EvertonSouzaFerreira</a> </li>
      <li style={{fontSize: '14px', display: 'flex', gap: '1rem', alignItems: 'center'}}> <img style={{width: '25px'}} src={linkedinImg} alt="" /> <a style={{color: '#FFF'}} href="https://www.linkedin.com/in/everton-de-souza-ferreira-1417921b2/">https://www.linkedin.com/in/everton-de-souza-ferreira-1417921b2/</a> </li>
    </ul>
    </MainContact>
    
  )
}

export default Contact