const  {transporter} = require('./configNodemiler');
const nodemailer = require('nodemailer')

    
const sendEmail = async(email,subject,title,info,link)=>{
    img = 'https://bysperfeccionoral.com/wp-content/uploads/2020/01/136-1366211_group-of-10-guys-login-user-icon-png.jpg'
    boostrap = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" '
  
    const emailOptions = {
        from: 'soporte conectatos app', // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        // html:  `<h1 style="background-color:#223569;color:#FDFDFD;font-family: arial, sans-serif;">${title}</h1>  <img width="230px" height="108px" naturalwidth="230px" naturalheight="108px" style="width:230px; height:108px; min-width:110px; max-width:225px; max-height:106px; min-height:52px;" src="https://ita-sa.com/static/images/logo_ITA_225px.png" data-outlook-trace="F:1|T:1">  <p>${info}</p>
        // <br> `,
        html :
         `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"  rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">


         <img data-imagetype="External" width="230px" height="108px" naturalwidth="230px" naturalheight="108px" src="https://ita-sa.com/static/images/logo_ITA_225px.png" align="left" width="100" height="21" alt="Microsoft" border="0">
         <br><br><br><br><br><br><br><b<r><br>
        <table class="table">
            <tr>

            
            <th  bgcolor="#223569"style="font-size:20px; letter-spacing:0; line-height:44px; font-weight:600;text-align: center;"><h1 style="color:white;">${title}</h1> </th>

            

            </tr>
            <tr>
            <td><p style="text-align:center;color:black;">${info}</p></td>
            </tr>
            
            <td bgcolor="#223569" style="border-color:#223569; min-width:140px; text-align:center; padding:10px; -webkit-border-radius:2px; -moz-border-radius:2px; border-radius:2px"><a href="${link}" target="_blank" rel="noopener noreferrer"  style="color:#ffffff; text-decoration:none; display:block" ><strong style="text-decoration:none; color:#ffffff; font-weight:normal">Iniciar sesión en contactos de ITA</strong> </a></td>
              

             
            
        </table>
        <br>
         cordialmente
        <br>
        <img naturalheight="85" naturalwidth="180" src="https://ita-sa.com/cuenta/firma/iso-certificado.png" data-outlook-trace="F:1|T:1" style="cursor: pointer; width:180px; max-width:180px; min-width:110px; height:85px; max-height:85px; min-height:52px;"> 

        <p style="font-size:16px;font-family:Calibri,Helvetica,sans-serif,EmojiFont,Apple Color Emoji,Segoe UI Emoji,NotoColorEmoji,Segoe UI Symbol,Android Emoji,EmojiSymbols;margin-top:0;margin-bottom:0;line-height:normal;">
              <b>
              	<span style="color:#2A83B6;font-size:18px; line-height: 19px;font-family:Arial,sans-serif; text-transform: uppercase;">
              	SOPORTE APP CONTACTOS DE ITA
  	            </span>
  	        </b>
  	        <span style="color:#888888;font-size:13px; line-height: 14px; font-family:Arial,sans-serif;"><br>
  	        </span>
  	        	
  			<span style="color:#888888;font-size:12px; line-height: 14px; font-family:Arial,sans-serif;">
  				<br>
  			</span>
            <br>
              <span style="color:#666666;font-size:12px; line-height: 16px; font-family:Arial,sans-serif;">
              Calle 93 # 12 - 14 Oficina 704</span>
              <br>
              <span style="color:#666666;font-size:12px; line-height: 16px; font-family:Arial,sans-serif;">
                Teléfono: (601) 300 00 74</span>
               <br> 
                <span style="color:#666666;font-size:12px; line-height: 16px; font-family:Arial,sans-serif;">
                Bogotá-Colombia</span> 
                <p style="background-color:white; margin-top:0; margin-bottom:0; line-height:normal; line-height:10px;  text-align: justify;">
              <br><br>
                <span style="color:#757B83;font-size:9px;font-family:Arial,sans-serif;background-color:white;line-height:9px;"><b style="color:#666">Protección de Datos:</b> Este mensaje de correo electrónico y su contenido está dirigido para uso exclusivo de los destinatarios del mismo y puede contener información que es privilegiada, confidencial, reservada, que debe ser utilizada únicamente para los fines previstos y deberá el destinatario propender porque la información continúe con dicho carácter. Si usted no es un destinatario previsto o el agente responsable de entregar este email al(los) destinatario(s) previsto(s), se le notifica por este medio que cualquier uso, difusión, distribución, copia, transcripción, transliteración o similares, de esta comunicación está prohibida, acarreará responsabilidad por los daños o perjuicios ocasionados y puede terminantemente ser ilegal; Si usted recibió este email por error, notifique por favor al remitente inmediatamente contestando a este email o por teléfono y borre el email que se le envió por error. 
                <br><br>♻️ Por favor considere el medio ambiente antes de imprimir este correo electrónico!</span><span style="color:#212121;font-size:11.5pt;font-family:Segoe UI,sans-serif;"></span>
            </p> `
    };

    transporter.sendMail(emailOptions,(info)=>{
        if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          } 

     
  })

  
}
   

module.exports = {sendEmail}