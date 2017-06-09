import React from 'react';
import ReactPDF from '@react-pdf/node';
import { Page, View, Document, Image, Text, StyleSheet } from '@react-pdf/core';

const mooveitMemberStyles = StyleSheet.create({
  container: { backgroundColor: '#3a3a3a', margin: 5, width: 80, height: 110 },
  image: { height: 55 },
  info: { padding: 8, height: 55, justifyContent: 'center' },
  text: { color: 'white', fontSize: 8 }
});

const MooveitMember = ({ img, name, position }) => (
  <View style={mooveitMemberStyles.container}>
    <Image src={img} style={mooveitMemberStyles.image} />
    <View style={mooveitMemberStyles.info}>
      <Text style={mooveitMemberStyles.text}>{name}</Text>
      <Text style={mooveitMemberStyles.text}>{position}</Text>
    </View>
  </View>
);

const pageStyles = StyleSheet.create({
  page: {
    backgroundColor: '#1d1d1d',
  }
});

const doc = (
  <Document>
    <Page size="A3" style={pageStyles.page}>
      <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>

      </View>
    </Page>
  </Document>
);

// Renders document and save it
ReactPDF.render(
  doc,
  `${__dirname}/output.pdf`,
);






















// <MooveitMember
//   name='Ariel Ludeña'
//   position='Chief Executive Officer, Board Member'
//   img='https://cdn3.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/ada55d1ef3056049/12fb1cf5a4f3/v/291c327a01ec/ariel-luduena.jpg' />
// <MooveitMember
//   name='Martín Cabrera'
//   position='Chief Technology Officer, Board Member'
//   img='https://cdn0.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/f9ebc278e7d57988/4e7def1b1b51/v/19e51ba41021/martin-cabrera.jpg' />
// <MooveitMember
//   name='Conrado Viña'
//   position='Partner , Board Member'
//   img='https://cdn3.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/2047c67b884add01/51beb7df5e97/v/32b5cf8d123e/conrado-vina.jpg' />
// <MooveitMember
//   name='Gabriel Rozman'
//   position='Board Member'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/f85d26d78b1759c4/b3ce26fecf64/v/e40a1ba2f713/Gabriel-Rozman-.jpg' />
// <MooveitMember
//   name='María Noel Burghi'
//   position='Chief Financial Officer'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/139a7fbbc300005d/b12412c43966/v/03acf62c7d14/maria-noel-burghi.jpg' />
// <MooveitMember
//   name='Gustavo Armagno'
//   position='Principal'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/cf64be33aa9db31f/4f0be0fd73be/v/f346360c0196/gustavo-armagno.jpg' />
// <MooveitMember
//   name='Hernán Daguerre'
//   position='Engagement Manager'
//   img='https://cdn0.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/42cb9e674370e880/ad93aa55135b/v/3598d97a21e2/hernan-daguerre.jpg' />
// <MooveitMember
//   name='Katie Ansley'
//   position='Account Executive'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/323241038bad045b/d7fdfe271492/v/f4ab8ddeb4bb/katie.jpg' />
// <MooveitMember
//   name='Rudy Lara'
//   position='Business Development'
//   img='https://cdn3.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/f9520f41d1d7509b/bde81d23dcc2/v/c7418c46aad1/rudy.jpg' />
// <MooveitMember
//   name='Paula Reboredo'
//   position='People Generalist'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/7684530133a80074/a1b9965f9af6/v/7f04347a6b3a/paula-reboredo.jpg' />
// <MooveitMember
//   name='Sofía Torres'
//   position='People Generalist'
//   img='https://cdn3.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/ac80b5da318db991/e560066b484e/v/3c84d381a9c0/sofia-torres.jpg' />
// <MooveitMember
//   name='Andreas Fast'
//   position='Team Leader'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/ccb22e18b44eda81/608c729a994d/v/4d429b465a36/andreas-fast.jpg' />
// <MooveitMember
//   name='Gabriel Fagúndez'
//   position='Team Leader'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/42da75b896632672/0dbfbd486952/v/db1b210241ce/gabriel-fagundez.jpg' />
// <MooveitMember
//   name='Ashley Lewis'
//   position='Developer'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/3aa8ce537eacc9a6/4cf46229c5f9/v/8c8b9f60c3b4/IMG_1550.jpg' />
// <MooveitMember
//   name='Pablo Ifrán'
//   position='Technical Architect'
//   img='https://cdn0.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/09be380c480ecb43/5a93c79da505/v/3c61bfcdb935/pablo-ifran.jpg' />
// <MooveitMember
//   name='Gianfranco Zas'
//   position='Technical Architect'
//   img='https://cdn3.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/080b130e845c196c/e363b7cbc222/v/52ce331c682c/gianfranco-zas.jpg' />
// <MooveitMember
//   name='Nicolás Suarez'
//   position='Frontend Developer'
//   img='https://cdn0.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/31151e14eb3ba699/f24ad401ae45/v/153af88a691a/nicolas-suarez.jpg' />
// <MooveitMember
//   name='Virgina Rodriguez'
//   position='Technical Architect'
//   img='https://cdn0.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/b5d1598d50b81d10/340c0121d205/v/9fadecec23fe/virginia-rodriguez.jpg' />
// <MooveitMember
//   name='Guzmán Iglesias'
//   position='Frontend Developer'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/c2ee272affa3c5ea/ee0a65384e7f/v/cdd241fb6d46/guzman-iglesias.jpg' />
// <MooveitMember
//   name='Ivan Etchart'
//   position='Developer'
//   img='https://cdn1.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/05d448e9aab372d3/55f0b61e3268/v/7cad62ae5421/ivan-etchart.jpg' />
// <MooveitMember
//   name='Miguel Renom'
//   position='Team Leader'
//   img='https://cdn1.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/9faae3115d60219d/c3cb832b42b6/v/07f693ea4550/miguel-renom.jpg' />
// <MooveitMember
//   name='Alfonso Rodriguez'
//   position='Developer'
//   img='https://cdn3.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/575184e2190b93d5/521525ad7989/v/77efa45b3237/Alfonso-Rodriguez.jpg' />
// <MooveitMember
//   name='Lucas Aragno'
//   position='Developer'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/8b2d997c3506c6d2/1024adb367d5/v/e7a11d33be61/lucas-aragno.jpg' />
// <MooveitMember
//   name='Gavin Haynes'
//   position='Developer'
//   img='https://cdn3.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/8527fff55ff62da7/b09ca667604b/v/0e388ccae4d9/IMG_1508.jpg' />
// <MooveitMember
//   name='Lesly Acuña'
//   position='Developer'
//   img='https://cdn1.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/92de02b6ddfaecce/97a6bc5130c4/v/aad7c478e9c4/lesly-acuna.jpg' />
// <MooveitMember
//   name='Mario Souto'
//   position='Developer'
//   img='https://cdn3.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/353e84c8d14de31f/4318513633c0/v/a32f1c770eba/IMG_6819.jpg' />
// <MooveitMember
//   name='Juan Ramón González'
//   position='Developer'
//   img='https://cdn0.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/f33d2bab3b478a45/10e1dc29ccba/v/ef59e68495e1/jr-gonzalez.jpg' />
// <MooveitMember
//   name='Matías Cubero'
//   position='Developer'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/a0b63da3119b20a6/9c7c2fd4ca27/v/2c56112592c0/matias-cubero.jpg' />
// <MooveitMember
//   name='Santiago Estragó'
//   position='Developer'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/e5d30205afbb29a2/af06499cbbdd/v/d7cd3a5b985e/santiago-estrago.jpg' />
// <MooveitMember
//   name='Mauricio Coniglio'
//   position='Developer'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/47df6ede377ea2a6/3cfa6b4790e4/v/99f0eae73106/Mauricio-co.jpg' />
// <MooveitMember
//   name='Maite Mañana'
//   position='Developer'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/91bdb3e58855eda0/6ebcbe11088c/v/aed1d334a6dd/maite-manana.jpg' />
// <MooveitMember
//   name='Germán Barros'
//   position='Technical Architect'
//   img='https://cdn0.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/102e5ff3c40e2987/3c3f3e6372c6/v/5c52cc49499c/german-barros.jpg' />
// <MooveitMember
//   name='Juan Manuel Pereira'
//   position='Mobile Developer'
//   img='https://cdn0.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/f862268d8dc1355f/0ab8c5b0a5a0/v/d941528be89a/juan-manuel-pereira.jpg' />
// <MooveitMember
//   name='José María Aguerre'
//   position='Mobile Developer'
//   img='https://cdn0.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/69b7b9b385f547c0/716e42eda2b3/v/f08190c7ee78/jose-aguerre.jpg' />
// <MooveitMember
//   name='Juan Andrés Zeni'
//   position='Developer'
//   img='https://cdn1.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/e09d866b2903abc1/0df5f70268ef/v/3e091fdbc2ef/juan-zeni-e8fcf841de9ee69ad5d4a424954a03e534c4c8cd470697de3db1484a466eb410.jpg' />
// <MooveitMember
//   name='Cristian Dotta'
//   position='Developer'
//   img='https://cdn1.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/f34369b6ffc9d9c1/5a7f9a4b0fa7/v/4118b7eb6302/cristian-dotta.jpg' />
// <MooveitMember
//   name='Michael Van Rompaey'
//   position='Technical Architect'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/3bea515ed6e79627/3861d41ffad9/v/ef48437eb0b8/michael-van-rompaey.jpg' />
// <MooveitMember
//   name='Inés Saint Martín'
//   position='Mobile Developer'
//   img='https://cdn1.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/16772e7f67129984/20c30db21526/v/443dc418207e/ines-saint-martin.jpg' />
// <MooveitMember
//   name='Santiago Noguera'
//   position='Developer'
//   img='https://cdn3.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/357b3837db2436b5/fa8bd14d0c24/v/201a38e3b58e/santiago-noguera.jpg' />
// <MooveitMember
//   name='Matías García'
//   position='Developer'
//   img='https://cdn0.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/c8765e527293af8c/d4242908d13c/v/8320918efdac/Matias-Garcia.jpg' />
// <MooveitMember
//   name='Agustín Daguerre'
//   position='Developer'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/c59d96b9e2696389/eadf4f9515ae/v/5e61e46218cb/agustin-daguerre.jpg' />
// <MooveitMember
//   name='Juan Diego Boix'
//   position='Developer'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/0a666c8b67842a6d/36f2b769abf0/v/9521d13f57eb/IMG_1561.jpg' />
// <MooveitMember
//   name='Ignacio Villaverde'
//   position='Developer'
//   img='https://cdn1.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/6387980a6dfb6512/f37dc76f366a/v/0bf5cf8732ae/ignacio-villaverde.jpg' />
// <MooveitMember
//   name='Martín Rifón'
//   position='Developer'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/c278ecd7d4fecc81/ab731d35b703/v/753ac3d403de/IMG_1531.jpg' />
// <MooveitMember
//   name='Lucía Carozzi'
//   position='Developer'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/bb1f02e444cdb215/949e955f9e8e/v/fdc9e403cb5d/lucia-carozzi.jpg' />
// <MooveitMember
//   name='Matías Masnú'
//   position='Developer'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/19dfc79d527eeab6/f682ef53167f/v/c25fed3815f1/IMG_6847-min.jpg' />
// <MooveitMember
//   name='Diego Muracciole'
//   position='Developer'
//   img='https://cdn1.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/37368fce4311cc25/e53169987a1f/v/5bc9f2fdae66/diego-muracciole-aa5d84f1e1172738b59a0521fbb123b78c4a428dc38ba50df453249efa2081fa.jpg' />
// <MooveitMember
//   name='Matías Navarro'
//   position='Developer'
//   img='https://cdn0.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/d930c40a2f78d42e/f1f9d156a0e2/v/cbb19b9505fb/IMG_1519.jpg' />
// <MooveitMember
//   name='Verónica Collado'
//   position='Office Maintenance'
//   img='https://cdn0.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/69235529dae47058/8acebc47f982/v/f0df880d6972/veronica-collado.jpg' />
// <MooveitMember
//   name='Maximiliano Casal'
//   position='Developer'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/2a11590c4ad63627/8d532ea14d09/v/cdcba96e6820/IMG_6903.jpg' />
// <MooveitMember
//   name='Aron Archimowicz'
//   position='Developer'
//   img='https://cdn2.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/ba66428b7d2d7264/aa67bb5db0d5/v/46f4b3c045f9/IMG_0581.jpg' />
// <MooveitMember
//   name='Bruno Vezoli'
//   position='Developer'
//   img='https://cdn1.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/5f7a4e03c25e0a77/eaf73fe0be66/v/9ce9f1f54594/IMG_1568.jpg' />
// <MooveitMember
//   name='Guillermo Chao'
//   position='Developer'
//   img='https://cdn0.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/f4ca00bc5639e595/283717f51e4c/v/8e4a49786786/guillermo-chao-29da44ae15bac3afae0ac995ac4d6560be95575ea0e4dfe05bdb547f253697a4.jpg' />
// <MooveitMember
//   name='Renzo Scuadroni'
//   position='Developer'
//   img='https://cdn1.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/ce6d0db6d23b7707/1e86cd107b0d/v/0878936de445/Renzo-Scuadroni.jpg' />
// <MooveitMember
//   name='Julieta Irigoyen'
//   position='Administration'
//   img='https://cdn0.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/82e4c422d230d151/c6136a6f2bc6/v/413f89d57537/julieta-irigoyen.jpg' />
// <MooveitMember
//   name='Jeasmine Ñahuí'
//   position='Mobile Developer'
//   img='https://cdn0.scrvt.com/f4ec9d9b5d842d1656c97ba1d6b27d5b/24854c9c33f8ffe0/047eba5bb7c3/v/4270dc76f7a9/IMG_0547.jpg' />
//
