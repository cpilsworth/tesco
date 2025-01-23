/*! Copyright 2025 Adobe
All Rights Reserved. */
import{jsxs as c,jsx as m}from"@dropins/tools/preact-jsx-runtime.js";import{classes as b}from"@dropins/tools/lib.js";import{InLineAlert as y,Header as p}from"@dropins/tools/components.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/recaptcha.js";import{r as C}from"./resendConfirmationEmail.js";import{useState as x,useCallback as E}from"@dropins/tools/preact-hooks.js";import{useText as u}from"@dropins/tools/i18n.js";/* empty css      */import{B as f}from"./Button2.js";const g=({userEmail:o,handleSetInLineAlertProps:t})=>{const a=u({emailConfirmationMessage:"Auth.Notification.emailConfirmationMessage",technicalErrorSendEmail:"Auth.Notification.technicalErrors.technicalErrorSendEmail"}),[r,e]=x(!1);return{handleEmailConfirmation:E(async()=>{var n,s;if(e(!0),o){const i=await C(o);if(i){const d=(n=i==null?void 0:i.errors)==null?void 0:n.length,h=(s=i==null?void 0:i.data)==null?void 0:s.resendConfirmationEmail;t(d?{type:"error",text:a.technicalErrorSendEmail}:{type:h?"success":"error",text:a.emailConfirmationMessage})}}e(!1)},[t,a,o]),disabledButton:r}},I=({formSize:o,userEmail:t,inLineAlertProps:a,hideCloseBtnOnEmailConfirmation:r,handleSetInLineAlertProps:e,onPrimaryButtonClick:l})=>{const n=u({title:"Auth.EmailConfirmationForm.title",subtitle:"Auth.EmailConfirmationForm.subtitle",mainText:"Auth.EmailConfirmationForm.mainText",buttonPrimary:"Auth.EmailConfirmationForm.buttonPrimary",buttonSecondary:"Auth.EmailConfirmationForm.buttonSecondary"}),{handleEmailConfirmation:s,disabledButton:i}=g({userEmail:t,handleSetInLineAlertProps:e});return c("div",{className:b(["auth-email-confirmation-form",`auth-email-confirmation-form--${o}`]),children:[a.text?m(y,{className:"auth-signInForm__notification",type:a.type,variant:"secondary",heading:a.text,icon:a.icon,"data-testid":"authInLineAlert"}):null,m(p,{title:n.title,divider:!1,className:"auth-email-confirmation-form__title"}),t!=null&&t.length?m("span",{className:"auth-email-confirmation-form__subtitle",children:`${n.subtitle} ${t}`}):null,m("span",{className:"auth-email-confirmation-form__text",children:n.mainText}),c("div",{className:"auth-email-confirmation-form__buttons",children:[m(f,{type:"button",variant:"tertiary",style:{padding:0},buttonText:n.buttonSecondary,enableLoader:!1,onClick:s,disabled:i}),r?null:m(f,{type:"submit",buttonText:n.buttonPrimary,variant:"primary",enableLoader:!1,disabled:i,onClick:l})]})]})},M=(o,t,a)=>{const r=o.target.querySelector('input[name="password"]'),e=o.target.querySelector('input[name="confirmPasswordField"]');r&&!t.length?r.focus():e&&!a.length&&e.focus()};export{I as E,M as f};
