import policy from "./privacyPolicy.json";

const paragraphClassName = "mt-4 text-base leading-7 text-brand-ink/90 sm:text-lg sm:leading-8";
const listClassName = `${paragraphClassName} grid list-disc gap-2 pl-6`;
const linkClassName =
  "font-bold text-brand-primary underline decoration-brand-soft underline-offset-4 transition-colors hover:decoration-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4 focus-visible:ring-offset-brand-surface";

function PolicySection({ children, number, title }) {
  return (
    <section className="mt-14" aria-labelledby={`section-${number}`}>
      <h2
        className="break-words text-2xl leading-tight text-brand-primary sm:text-3xl"
        id={`section-${number}`}
      >
        {number}. {title}
      </h2>
      <div className="mt-5 h-px w-16 bg-brand-accent" aria-hidden="true" />
      {children}
    </section>
  );
}

function MailLink() {
  return (
    <a className={linkClassName} href={`mailto:${policy.privacyEmail}`}>
      {policy.privacyEmail}
    </a>
  );
}

function ExternalLink({ children, href }) {
  return (
    <a className={linkClassName} href={href}>
      {children}
    </a>
  );
}

export default function BootcampPrivacyPolicyPage() {
  return (
    <div className="min-h-dvh bg-brand-surface text-brand-ink">
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-32 sm:px-8 sm:pt-36">
        <h1 className="max-w-3xl break-words text-4xl leading-[1.08] text-brand-primary">
          Política de privacidad del Bootcamp Ad Astra
        </h1>

        <div className="mt-7 grid gap-2 text-base font-bold text-brand-ink/80 sm:text-lg">
          <p>Versión {policy.version}</p>
          <p>Última actualización: {policy.lastUpdated}</p>
        </div>

        <PolicySection number="1" title="¿Quién es responsable de tus datos?">
          <p className={paragraphClassName}>
            <strong>Responsable:</strong> {policy.controller}.
            <br />
            <strong>Dirección:</strong> {policy.address}.
            <br />
            <strong>Contacto de privacidad:</strong> <MailLink />.
          </p>
          <p className={paragraphClassName}>
            Ad Astra decide para qué se utilizan los datos del formulario, quién puede consultarlos y durante
            cuánto tiempo se conservan. La Universidad Carlos III de Madrid apoya la actividad y mantiene su
            registro de asociaciones, pero no organiza este tratamiento ni decide sobre las respuestas del
            formulario.
          </p>
          <p className={paragraphClassName}>
            Esta versión del formulario y del Bootcamp está dirigida exclusivamente a personas de{" "}
            <strong>18 años o más</strong>.
          </p>
        </PolicySection>

        <PolicySection number="2" title="¿Para qué utilizaremos tus datos?">
          <p className={paragraphClassName}>Los utilizaremos para:</p>
          <ul className={listClassName}>
            <li>Recibir y tramitar tu solicitud para participar en el Bootcamp.</li>
            <li>Comprobar los requisitos y organizar el proceso de selección.</li>
            <li>Conocer tus preferencias y asignarte, cuando corresponda, un proyecto o departamento.</li>
            <li>Enviarte fechas, resultados, cambios e información práctica del Bootcamp.</li>
            <li>Gestionar tu asistencia, participación y evaluación durante la actividad.</li>
            <li>
              Contactar contigo después del Bootcamp para continuar el proceso de selección y tu posible
              incorporación a Ad Astra.
            </li>
            <li>
              Elaborar estadísticas internas sobre el perfil de los participantes y, cuando corresponda,
              compartir únicamente resultados agregados o anonimizados que no permitan identificar a ninguna
              persona.
            </li>
            <li>
              Si lo autorizas por separado, conservar determinadas respuestas opcionales de tu perfil y
              contactarte por correo electrónico durante un máximo de 12 meses para informarte sobre la futura
              bolsa de talento de Ad Astra y sobre oportunidades de prácticas, empleo, TFG/TFM, investigación,
              formación o colaboración relacionadas con tu perfil.
            </li>
            <li>
              Estas comunicaciones podrán incluir oportunidades propuestas por empresas colaboradoras, pero será
              Ad Astra quien las envíe.
            </li>
            <li>Atender tus preguntas o solicitudes relacionadas con privacidad.</li>
            <li>Cumplir las obligaciones legales que resulten aplicables y atender posibles reclamaciones.</li>
          </ul>
          <p className={paragraphClassName}>
            Esta autorización no permite comunicar a las empresas los perfiles, respuestas ni datos de contacto
            de los participantes. Si en el futuro Ad Astra quiere facilitar datos identificables a una empresa,
            solicitará previamente una autorización separada y explicará las condiciones concretas de esa
            comunicación.
          </p>
          <p className={paragraphClassName}>
            El Bootcamp forma parte del proceso con el que Ad Astra conoce y selecciona a las personas que
            pueden incorporarse a la asociación. Por eso, el contacto posterior relacionado con ese proceso no
            se utilizará para enviarte publicidad ni campañas ajenas al Bootcamp y a la posible incorporación.
          </p>
          <p className={paragraphClassName}>
            Si finalmente te incorporas a Ad Astra, te facilitaremos información específica sobre el uso de los
            datos necesarios para gestionar tu condición de miembro.
          </p>
        </PolicySection>

        <PolicySection number="3" title="¿Por qué podemos utilizar los datos?">
          <p className={paragraphClassName}>
            El tratamiento de los datos necesarios para tramitar tu solicitud, organizar el Bootcamp y gestionar
            el proceso de selección se basa en el{" "}
            <strong>artículo 6.1.b del Reglamento General de Protección de Datos (RGPD)</strong>. Al enviar el
            formulario, solicitas participar en el Bootcamp y en el proceso de selección y posible incorporación
            asociado a él.
          </p>
          <p className={paragraphClassName}>
            Las preguntas que se marquen como opcionales se tratarán con tu consentimiento, conforme al{" "}
            <strong>artículo 6.1.a del RGPD</strong>. También se basarán en tu consentimiento, de forma
            independiente y voluntaria:
          </p>
          <ul className={listClassName}>
            <li>Las respuestas a las preguntas opcionales de perfil.</li>
            <li>La elaboración de estadísticas a partir de esas respuestas.</li>
            <li>La conservación del perfil durante 12 meses y el envío de oportunidades por correo electrónico.</li>
            <li>La publicación de fotografías en las que puedas aparecer.</li>
            <li>Tu incorporación al grupo de WhatsApp.</li>
          </ul>
          <p className={paragraphClassName}>
            El consentimiento para la bolsa de talento será independiente, voluntario y no estará premarcado. No
            darlo o retirarlo no afectará a la participación en el Bootcamp ni al proceso de selección. Las
            comunicaciones por correo electrónico se enviarán únicamente a quienes las hayan autorizado y
            ofrecerán una forma sencilla de dejar de recibirlas.
          </p>
          <p className={paragraphClassName}>
            La autorización de fotografías se concede además conforme a la <strong>Ley Orgánica 1/1982</strong>,
            que protege el derecho a la propia imagen.
          </p>
          <p className={paragraphClassName}>
            Cuando necesitemos tratar información para cumplir una obligación legal, la base será el{" "}
            <strong>artículo 6.1.c del RGPD</strong>. La conservación mínima necesaria para formular, ejercer o
            defender reclamaciones se basará en el interés legítimo previsto en el{" "}
            <strong>artículo 6.1.f del RGPD</strong>.
          </p>
        </PolicySection>

        <PolicySection number="4" title="¿Qué datos utilizaremos?">
          <p className={paragraphClassName}>Según las opciones que elijas, podremos tratar:</p>
          <ul className={listClassName}>
            <li>Tu nombre y apellidos.</li>
            <li>Tu Número de Identificación del Alumno (<strong>NIA</strong>).</li>
            <li>
              Tu correo institucional, obtenido o verificado mediante el formato{" "}
              <code>NIA@alumnos.uc3m.es</code>.
            </li>
            <li>Tu carrera y curso.</li>
            <li>Tus preferencias de proyecto o departamento.</li>
            <li>Tus respuestas a las preguntas de motivación.</li>
            <li>
              Las respuestas opcionales sobre tu perfil académico y profesional, como tu experiencia, proyectos,
              áreas de interés y los programas, herramientas o tecnologías que manejas, así como los enlaces
              profesionales que decidas facilitar.
            </li>
            <li>
              La información generada durante la evaluación, selección, asignación, asistencia y participación.
            </li>
            <li>
              La fecha, hora, identificador de envío y versión de los avisos mostrados, cuando sean necesarios
              para demostrar qué información recibiste o qué opción elegiste.
            </li>
            <li>Si das permiso, tu imagen en fotografías del Bootcamp.</li>
          </ul>
          <p className={paragraphClassName}>
            El NIA se utiliza como identificador único del estudiante, para obtener o verificar el correo
            institucional y para contactar contigo durante el Bootcamp y el proceso posterior.
          </p>
          <p className={paragraphClassName}>
            Si autorizas tu incorporación a la futura bolsa de talento, conservaremos únicamente los datos de
            contacto y de perfil necesarios para esa finalidad.
          </p>
          <p className={paragraphClassName}>
            Los campos señalados como obligatorios son necesarios para tramitar tu solicitud. Si no los
            completas, no podremos gestionar la inscripción. Las preguntas opcionales pueden dejarse en blanco
            y puedes rechazar la bolsa de talento sin que eso perjudique tu participación o tus posibilidades en
            el proceso de selección.
          </p>
        </PolicySection>

        <PolicySection number="5" title="¿Quién podrá consultar los datos?">
          <p className={paragraphClassName}>
            Solo accederán las personas de Ad Astra que los necesiten para organizar el Bootcamp y gestionar la
            selección. Los responsables de cada proyecto o departamento recibirán únicamente la información
            necesaria de las personas que tengan asignadas.
          </p>
          <p className={paragraphClassName}>
            También utilizamos proveedores tecnológicos para poder prestar el servicio:
          </p>
          <ul className={listClassName}>
            <li>
              <strong>Tally BV</strong>, con sede en Bélgica, para recoger y almacenar las respuestas del
              formulario.
            </li>
            <li>
              <strong>Airtable, operado por Formagrid Inc.,</strong> para almacenar y gestionar las respuestas del
              formulario y, cuando exista autorización, los datos incluidos en la bolsa de talento.
            </li>
            <li>
              <strong>Google Workspace</strong>, para gestionar las comunicaciones por correo electrónico. La
              cuenta utilizada pertenece al entorno institucional de UC3M y está administrada por la Universidad.
            </li>
            <li>
              <strong>Vercel</strong>, exclusivamente para alojar la página web y procesar los datos técnicos
              necesarios para mostrarla. Las fotografías se cargarán directamente desde ImageKit y Vercel no
              almacenará sus archivos originales.
            </li>
            <li>
              <strong>ImageKit Private Limited</strong>, para almacenar, optimizar y servir las fotografías
              autorizadas que publiquemos en la web. Cuando el navegador cargue estas imágenes, ImageKit podrá
              tratar los datos técnicos necesarios para entregarlas, como la dirección IP, la URL solicitada y
              datos del navegador.
            </li>
            <li>
              <strong>Meta Platforms Ireland Limited</strong>, cuando publiquemos una fotografía autorizada en
              Instagram <ExternalLink href={policy.instagramUrl}>{policy.instagramHandle}</ExternalLink>.
            </li>
            <li>
              <strong>LinkedIn Ireland Unlimited Company</strong>, cuando publiquemos una fotografía autorizada
              en la página de <ExternalLink href={policy.linkedinUrl}>LinkedIn de Ad Astra UC3M</ExternalLink>.
            </li>
            <li>
              <strong>TikTok Technology Limited y TikTok Information Technologies UK Limited</strong>, que TikTok
              identifica como corresponsables del tratamiento de la plataforma, cuando publiquemos una fotografía
              autorizada en la cuenta de TikTok de Ad Astra UC3M{" "}
              <ExternalLink href={policy.tiktokUrl}>{policy.tiktokHandle}</ExternalLink>.
            </li>
            <li>
              <strong>WhatsApp Ireland Limited</strong>, si decides entrar voluntariamente en el grupo de
              WhatsApp.
            </li>
          </ul>
          <p className={paragraphClassName}>
            Ad Astra no entregará las respuestas a UC3M para que la Universidad las utilice con fines propios.
            No obstante, la cuenta de Google Workspace utilizada pertenece al entorno institucional administrado
            por UC3M, por lo que sus administradores autorizados pueden disponer de capacidades técnicas de
            administración conforme a las políticas de la Universidad.
          </p>
          <p className={paragraphClassName}>
            Las fotografías publicadas en la web, Instagram, LinkedIn o TikTok serán visibles públicamente. Otras
            personas podrán verlas, compartirlas o conservar copias fuera del control de Ad Astra.
          </p>
          <p className={paragraphClassName}>
            Las empresas colaboradoras no recibirán perfiles ni datos identificables basándose en la autorización
            de la bolsa de talento. Ad Astra podrá informar directamente a las personas interesadas sobre sus
            oportunidades. Cualquier comunicación posterior de datos a una empresa requerirá una autorización
            separada.
          </p>
          <p className={paragraphClassName}>
            No comunicaremos tus datos a otras entidades salvo que sea necesario para prestar los servicios
            descritos, exista una obligación legal o nos hayas autorizado expresamente.
          </p>
        </PolicySection>

        <PolicySection number="6" title="Transferencias internacionales">
          <p className={paragraphClassName}>
            Algunos de nuestros proveedores, como Google, Vercel, Meta, WhatsApp, LinkedIn y TikTok, utilizan
            infraestructura internacional que puede implicar el tratamiento de datos fuera del Espacio Económico
            Europeo.
          </p>
          <p className={paragraphClassName}>
            Cuando esto ocurra, las transferencias se realizarán utilizando las garantías reconocidas por el RGPD
            que correspondan, como una decisión de adecuación —incluido el Marco de Privacidad de Datos UE–EE.
            UU. para las entidades adheridas— o las cláusulas contractuales tipo aprobadas por la Comisión Europea.
          </p>
          <p className={paragraphClassName}>
            Las fotografías se almacenarán y procesarán dentro de la Unión Europea. No obstante, determinados datos 
            de cuenta y registros técnicos o de CDN pueden tratarse en Estados Unidos. Cuando existan transferencias 
            internacionales, se aplicarán las garantías recogidas en su acuerdo de tratamiento de datos, incluidas 
            las cláusulas contractuales tipo de la Comisión Europea y, cuando resulte aplicable, el Marco de 
            Privacidad de Datos UE–EE. UU. Puedes solicitar información o una copia de las garantías aplicables 
            escribiendo a <MailLink />.
          </p>
        </PolicySection>

        <PolicySection number="7" title="¿Durante cuánto tiempo conservaremos los datos?">
          <ul className={listClassName}>
            <li>
              <strong>Si no continúas en el proceso:</strong> eliminaremos tus datos 90 días después de que
              finalice el Bootcamp.
            </li>
            <li>
              <strong>Si continúas en la selección o incorporación:</strong> los conservaremos mientras el proceso
              siga activo y, como máximo, durante 12 meses desde la finalización del Bootcamp.
            </li>
            <li>
              <strong>Si te incorporas a Ad Astra:</strong> conservaremos los datos necesarios mientras formes
              parte de la asociación. Las respuestas y valoraciones de selección que ya no hagan falta se
              eliminarán o anonimizarán.
            </li>
            <li>
              <strong>NIA:</strong> seguirá el plazo que corresponda a tu situación y se eliminará cuando deje de
              ser necesario para identificarte, contactar contigo o gestionar tu pertenencia a la asociación.
            </li>
            <li>
              <strong>Fotografías autorizadas:</strong> podrán permanecer publicadas mientras sigan sirviendo para
              documentar y difundir las actividades de Ad Astra y no retires tu autorización. No tienen una fecha
              automática de retirada. Si retiras la autorización, eliminaremos la fotografía de ImageKit y,
              solicitaremos la purga de sus copias en caché y la retiraremos de la web y de las
              cuentas oficiales controladas por Ad Astra.
            </li>
            <li>
              <strong>Bolsa de talento y oportunidades:</strong> si das tu consentimiento, conservaremos los datos
              de contacto y las respuestas opcionales de perfil necesarias durante un máximo de 12 meses desde la
              fecha de la autorización. Los eliminaremos antes si retiras el consentimiento. Para seguir
              utilizándolos después de ese plazo tendremos que solicitar una nueva autorización.
            </li>
            <li>
              <strong>Pruebas de información y consentimiento:</strong> podremos conservar la evidencia mínima
              necesaria, con acceso restringido, durante los plazos en los que puedan surgir responsabilidades
              legales.
            </li>
          </ul>
          <p className={paragraphClassName}>
            Los resultados estadísticos que hayan sido anonimizados de forma irreversible podrán conservarse
            durante más tiempo porque ya no permitirán identificar a ninguna persona.
          </p>
          <p className={paragraphClassName}>
            El plazo de 12 meses de la bolsa de talento no se aplicará automáticamente al NIA, a las evaluaciones
            de selección ni al resto de la solicitud, que seguirán los plazos correspondientes a sus propias
            finalidades.
          </p>
          <p className={paragraphClassName}>
            La eliminación se aplicará a las copias controladas por Ad Astra en Tally, Airtable, Google Workspace
            y los demás sistemas utilizados.
          </p>
        </PolicySection>

        <PolicySection number="8" title="Fotografías del Bootcamp">
          <p className={paragraphClassName}>
            Durante el Bootcamp podremos hacer fotografías para documentar la actividad y compartir lo que
            hacemos como asociación. Solo publicaremos imágenes en las que seas identificable si has marcado una
            autorización separada, voluntaria y no premarcada.
          </p>
          <p className={paragraphClassName}>Las publicaciones podrán aparecer en:</p>
          <ul className={listClassName}>
            <li><ExternalLink href={policy.websiteUrl}>{policy.websiteLabel}</ExternalLink>.</li>
            <li>Instagram <ExternalLink href={policy.instagramUrl}>{policy.instagramHandle}</ExternalLink>.</li>
            <li>
              Página de LinkedIn de Ad Astra UC3M:{" "}
              <ExternalLink href={policy.linkedinUrl}>{policy.linkedinLabel}</ExternalLink>.
            </li>
            <li>
              Cuenta de TikTok de Ad Astra UC3M:{" "}
              <ExternalLink href={policy.tiktokUrl}>{policy.tiktokLabel}</ExternalLink>.
            </li>
          </ul>
          <p className={paragraphClassName}>
            No vincularemos tu nombre a la fotografía salvo que te pidamos otra autorización específica. Antes
            de publicar, comprobaremos las autorizaciones y evitaremos que quienes no hayan dado permiso aparezcan
            como protagonistas o sean identificables.
          </p>
          <p className={paragraphClassName}>
            Las imágenes originales y las copias aprobadas para publicación se mantendrán separadas. Las
            fotografías publicadas serán visibles públicamente y terceras personas podrán conservar o compartir
            copias fuera del control de Ad Astra.
          </p>
          <p className={paragraphClassName}>
            Puedes retirar la autorización cuando quieras escribiendo a <MailLink />. Si puedes, indícanos el
            evento, el enlace o una descripción que nos ayude a localizar la imagen.
          </p>
          <p className={paragraphClassName}>Cuando recibamos la solicitud:</p>
          <ul className={listClassName}>
            <li>Dejaremos de hacer nuevos usos de esa fotografía.</li>
            <li>
              Eliminaremos la fotografía del proveedor de almacenamiento de imágenes. 
            </li>
            <li>
              La retiraremos de la web y de las cuentas oficiales que controlemos, o recortaremos o difuminaremos
              la imagen para que dejes de ser identificable, sin dilación indebida.
            </li>
          </ul>
          <p className={paragraphClassName}>
            La retirada no convierte en ilícitos los usos realizados antes de recibirla. Tampoco podemos
            garantizar que desaparezcan las copias guardadas o publicadas por terceras personas fuera de nuestro
            control.
          </p>
        </PolicySection>

        <PolicySection number="9" title="Grupo de WhatsApp">
          <p className={paragraphClassName}>
            Entrar en el grupo será voluntario. No te añadiremos automáticamente ni recogeremos tu teléfono en el
            formulario para esta finalidad: te facilitaremos un enlace para que decidas si quieres unirte. La
            información necesaria para participar también se enviará por correo electrónico.
          </p>
          <p className={paragraphClassName}>
            En un grupo ordinario de WhatsApp, tu número de teléfono y, dependiendo de tu configuración, tu
            nombre, fotografía y otros datos del perfil pueden ser visibles para las demás personas del grupo.
            Los mensajes y archivos también pueden guardarse o reenviarse.
          </p>
          <p className={paragraphClassName}>
            El grupo podrá mantenerse mientras se utilice para coordinar el Bootcamp, la selección o la
            incorporación a Ad Astra. Revisaremos periódicamente sus miembros y administradores para limitar el
            acceso a personas vinculadas con estas finalidades. Puedes abandonarlo en cualquier momento. WhatsApp
            informa de que tu número puede continuar apareciendo en la lista de antiguos participantes durante un
            máximo de 60 días.
          </p>
        </PolicySection>

        <PolicySection number="10" title="¿Se tomarán decisiones automáticas?">
          <p className={paragraphClassName}>
            No utilizaremos algoritmos para decidir automáticamente quién continúa en el proceso ni elaboraremos
            perfiles automatizados. Las valoraciones y decisiones de selección las realizarán personas
            autorizadas de Ad Astra.
          </p>
        </PolicySection>

        <PolicySection number="11" title="Tus derechos">
          <p className={paragraphClassName}>Puedes pedirnos:</p>
          <ul className={listClassName}>
            <li>Acceso a los datos que tenemos sobre ti.</li>
            <li>Rectificación de datos incorrectos.</li>
            <li>Supresión de los datos cuando corresponda.</li>
            <li>Limitación u oposición al tratamiento en los casos previstos legalmente.</li>
            <li>Portabilidad cuando resulte aplicable.</li>
            <li>Retirada del consentimiento para fotografías, WhatsApp o cualquier otra opción voluntaria.</li>
          </ul>
          <p className={paragraphClassName}>
            Para ejercerlos, escribe a <MailLink /> y dinos qué necesitas. Solo solicitaremos información
            adicional para confirmar tu identidad cuando sea razonablemente necesario. Como regla general,
            responderemos en el plazo máximo de un mes.
          </p>
          <p className={paragraphClassName}>
            También puedes presentar una reclamación ante la{" "}
            <ExternalLink href="https://www.aepd.es">Agencia Española de Protección de Datos</ExternalLink>.
          </p>
          <p className={paragraphClassName}>
            Cuando el tratamiento se base en tu consentimiento, podrás retirarlo en cualquier momento. La retirada
            no afectará a la licitud del tratamiento realizado anteriormente.
          </p>
          <p className={paragraphClassName}>
            Si retiras el consentimiento para la bolsa de talento, dejaremos de enviarte nuevas oportunidades y
            eliminaremos tu perfil de la base activa. Podremos conservar únicamente la evidencia mínima y
            restringida necesaria para demostrar la información mostrada, el consentimiento otorgado y su
            retirada.
          </p>
        </PolicySection>

        <PolicySection number="12" title="Cómo protegemos la información">
          <p className={paragraphClassName}>
            El acceso a Airtable, Google Workspace e ImageKit estará limitado a las personas autorizadas.
            La cuenta de ImageKit estará controlada por Ad Astra. Utilizaremos autenticación en dos pasos siempre
            que esté disponible y revisaremos los permisos cuando cambien los responsables de la asociación. Las
            fotografías originales estarán separadas de las copias aprobadas para publicación. No compartiremos
            bases completas ni datos de participantes a través de canales no autorizados.
          </p>
        </PolicySection>

        <PolicySection number="13" title="Cambios en esta política">
          <p className={paragraphClassName}>
            Actualizaremos esta política si cambian el formulario, las finalidades, los proveedores o el
            funcionamiento del Bootcamp. La versión vigente estará disponible en{" "}
            <ExternalLink href={policy.privacyPolicyUrl}>{policy.privacyPolicyLabel}</ExternalLink>.
          </p>
        </PolicySection>
      </article>
    </div>
  );
}
