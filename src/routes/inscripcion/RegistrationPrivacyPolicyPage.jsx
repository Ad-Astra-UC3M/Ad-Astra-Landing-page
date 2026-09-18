const PRIVACY_EMAIL = "info@adastrauc3m.es";
const POLICY_URL = "https://www.adastrauc3m.es/inscripcion/politica-de-privacidad";
const OPPORTUNITIES_UNSUBSCRIBE_URL = "https://tally.so/r/9qkjk4";
const AEPD_CLAIMS_URL =
  "https://www.aepd.es/preguntas-frecuentes/13-reclamaciones/FAQ-1301-como-puedo-interponer-una-reclamacion-si-han-vulnerado-mis-datos-de-caracter-personal";

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
    <a className={linkClassName} href={`mailto:${PRIVACY_EMAIL}`}>
      {PRIVACY_EMAIL}
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

export default function RegistrationPrivacyPolicyPage() {
  return (
    <div className="min-h-dvh bg-brand-surface text-brand-ink">
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-32 sm:px-8 sm:pt-36">
        <h1 className="max-w-3xl break-words text-4xl leading-[1.08] text-brand-primary">
          Política de privacidad de la inscripción a Ad Astra UC3M
        </h1>

        <div className="mt-7 grid gap-2 text-base font-bold text-brand-ink/80 sm:text-lg">
          <p>Versión 1.0</p>
          <p>Última actualización: 18 de septiembre de 2026</p>
        </div>

        <PolicySection number="1" title="¿Quién es responsable de tus datos?">
          <p className={paragraphClassName}>
            <strong>Responsable:</strong> Ad Astra, asociación de estudiantes de la Universidad Carlos III de
            Madrid, inscrita en el Registro de Asociaciones de Estudiantes de la UC3M y conocida públicamente
            como Ad Astra UC3M.
            <br />
            <strong>Dirección:</strong> Avenida de la Universidad, 30, 28911 Leganés (Madrid).
            <br />
            <strong>Contacto de privacidad:</strong> <MailLink />.
          </p>
          <p className={paragraphClassName}>
            Ad Astra decide para qué se utilizan los datos del formulario «Inscripción a Ad Astra UC3M», quién
            puede consultarlos y durante cuánto tiempo se conservan. La Universidad Carlos III de Madrid apoya
            la asociación y mantiene su registro de asociaciones, pero no decide sobre las candidaturas ni
            utiliza las respuestas para fines propios. No obstante, la cuenta de Google Workspace que usamos
            pertenece al entorno institucional administrado por UC3M, como explicamos más adelante.
          </p>
          <p className={paragraphClassName}>
            El formulario permite solicitar la incorporación de dos maneras: como miembro del equipo,
            participando activamente en un proyecto o departamento, o como asociado/a de la comunidad,
            participando en actividades y eventos sin asumir una implicación técnica continuada.
          </p>
        </PolicySection>

        <PolicySection number="2" title="¿Para qué utilizaremos tus datos?">
          <p className={paragraphClassName}>Los utilizaremos para:</p>
          <ul className={listClassName}>
            <li>recibir y tramitar tu solicitud de incorporación;</li>
            <li>identificarte y verificar tus datos académicos y tu correo institucional;</li>
            <li>conocer si quieres incorporarte como miembro del equipo o como asociado/a de la comunidad;</li>
            <li>
              si eliges el equipo, valorar tu experiencia, motivación y preferencias y estudiar tu posible
              asignación a un proyecto, área o departamento;
            </li>
            <li>si eliges la comunidad, conocer tus intereses y cómo te gustaría participar;</li>
            <li>
              comunicarte el estado y el resultado de la solicitud y organizar los pasos de incorporación;
            </li>
            <li>
              si eres admitido/a, gestionar el inicio de tu participación y enviarte las comunicaciones
              necesarias relacionadas con tu vínculo con Ad Astra;
            </li>
            <li>
              si te incorporas como miembro del equipo o asociado/a de la comunidad, utilizar los datos de tu
              perfil y participación para elaborar estadísticas agregadas o anonimizadas que no permitan
              identificarte, para uso interno o para presentarlas a entidades colaboradoras;
            </li>
            <li>
              si lo autorizas por separado, conservar determinadas respuestas opcionales de tu perfil mientras
              formes parte de Ad Astra y mantengas el consentimiento, contactarte por correo sobre prácticas,
              becas, empleo, TFG/TFM, investigación, formación o colaboraciones relacionadas con tu perfil y
              presentar o comunicar tu perfil identificable a entidades colaboradoras que puedan ofrecerte esas
              oportunidades;
            </li>
            <li>
              atender tus solicitudes sobre privacidad, cumplir las obligaciones legales aplicables y formular,
              ejercer o defender posibles reclamaciones.
            </li>
          </ul>
          <p className={paragraphClassName}>
            Las oportunidades de la Talent Database podrán proceder de empresas o entidades colaboradoras. Ad
            Astra podrá enviártelas directamente o presentar o comunicar a una entidad colaboradora los datos
            identificativos, de contacto, académicos y profesionales de tu perfil que sean pertinentes para una
            oportunidad concreta. La autorización inicial de la Talent Database cubre esta comunicación y no
            será necesario solicitar un nuevo permiso para cada oportunidad.
          </p>
          <p className={paragraphClassName}>
            Ad Astra, para cada oportunidad, compartirá, entre los datos enumerados en esta política, aquellos que resulten pertinentes.
          </p>
          <p className={paragraphClassName}>
            Las entidades colaboradoras no recibirán tu NIA, las respuestas de motivación, las preferencias
            internas, las valoraciones de selección ni las notas de los responsables. Tampoco podrán utilizar el
            perfil para finalidades incompatibles con la oportunidad o colaboración para la que lo hayan
            recibido.
          </p>
          <p className={paragraphClassName}>
            Las comunicaciones necesarias para tramitar tu solicitud o gestionar tu pertenencia a Ad Astra no se
            utilizarán para enviarte publicidad ajena a la asociación. Si después de tu incorporación empezamos
            a tratar otros datos o a utilizarlos para finalidades nuevas, te facilitaremos la información
            correspondiente antes de hacerlo.
          </p>
        </PolicySection>

        <PolicySection number="3" title="¿Por qué podemos utilizar los datos?">
          <p className={paragraphClassName}>
            El tratamiento necesario para tramitar tu solicitud, valorar la vía de incorporación que hayas
            elegido y realizar, en su caso, la asignación inicial se basa en el artículo 6.1.b del Reglamento
            General de Protección de Datos (RGPD): son medidas que nos pides al enviar el formulario con la
            intención de incorporarte a la asociación.
          </p>
          <p className={paragraphClassName}>
            Los campos identificados como opcionales —por ejemplo, un enlace profesional, el CV o los hobbies—
            se tratarán con el consentimiento que expresas al completarlos voluntariamente, conforme al artículo
            6.1.a del RGPD. Puedes dejarlos en blanco sin que eso, por sí solo, impida tramitar tu solicitud.
          </p>
          <p className={paragraphClassName}>
            La Talent Database se basa en un consentimiento independiente, voluntario y no premarcado, también
            conforme al artículo 6.1.a del RGPD. Ese consentimiento cubre la conservación y consulta interna del
            perfil, el envío de oportunidades por Ad Astra, la presentación o comunicación del perfil
            identificable y de los datos de contacto pertinentes a entidades colaboradoras y la elaboración o
            presentación de estadísticas agregadas que no permitan identificarte. No darlo o retirarlo no
            afectará a tu candidatura, a tu incorporación ni a tu participación en Ad Astra.
          </p>
          <p className={paragraphClassName}>
            Cuando sea necesario tratar información para cumplir una obligación legal, la base será el artículo
            6.1.c del RGPD. La conservación mínima y restringida que resulte necesaria para formular, ejercer o
            defender reclamaciones se basará en el interés legítimo del artículo 6.1.f del RGPD.
          </p>
        </PolicySection>

        <PolicySection number="4" title="¿Qué datos utilizaremos?">
          <p className={paragraphClassName}>Según la vía y las opciones que elijas, podremos tratar:</p>
          <ul className={listClassName}>
            <li>tu nombre y apellidos;</li>
            <li>
              tu Número de Identificación del Alumno (NIA) y el correo institucional obtenido o verificado
              mediante el formato <code>NIA@alumnos.uc3m.es</code>;
            </li>
            <li>tu curso, titulación y modalidad lingüística;</li>
            <li>la vía de incorporación elegida;</li>
            <li>si decides facilitarlos, tu LinkedIn, portfolio, GitHub o CV;</li>
            <li>
              si solicitas unirte al equipo, tu participación previa en actividades de Ad Astra, tus preferencias
              de áreas, proyectos y departamentos, tus respuestas sobre motivación, aportación, experiencia,
              proyectos y hobbies, y las valoraciones, decisiones y asignaciones generadas durante el proceso;
            </li>
            <li>
              si solicitas ser asociado/a de la comunidad, tus intereses y la forma en la que te gustaría
              participar;
            </li>
            <li>
              si autorizas la Talent Database, tu nombre y datos de contacto, los datos académicos pertinentes,
              los enlaces profesionales o el CV que hayas facilitado, las herramientas y tecnologías que
              manejas, tu tipo de experiencia, las oportunidades que te interesan y los demás datos opcionales de
              perfil necesarios para enviarte oportunidades o presentar tu perfil a entidades colaboradoras;
            </li>
            <li>
              la fecha, hora, identificador de envío y versión de los avisos y consentimientos, cuando sean
              necesarios para demostrar qué información recibiste y qué opción elegiste;
            </li>
            <li>
              los datos técnicos que los proveedores tecnológicos necesiten para prestar y proteger sus
              servicios, como la dirección IP, el navegador o registros de seguridad, según sus condiciones
              aplicables.
            </li>
          </ul>
          <p className={paragraphClassName}>
            El NIA se utiliza como identificador único del estudiante, para obtener o verificar el correo
            institucional y para contactar contigo durante el proceso. Los campos obligatorios son necesarios
            para tramitar la solicitud; si no los completas, no podremos gestionarla. Los campos opcionales
            pueden dejarse en blanco sin ninguna consecuencia automática.
          </p>
          <p className={paragraphClassName}>
            No incluyas en las respuestas abiertas ni en los documentos datos especialmente sensibles —por
            ejemplo, sobre salud, ideología, religión u orientación sexual— ni información personal de terceras
            personas que no sea necesaria.
          </p>
        </PolicySection>

        <PolicySection number="5" title="¿Quién podrá consultar los datos?">
          <p className={paragraphClassName}>
            Solo accederán las personas autorizadas de Ad Astra que necesiten la información para gestionar las
            solicitudes y la incorporación. Los responsables de proyectos, departamentos o comunidad recibirán
            únicamente los datos necesarios de las personas que deban valorar o acompañar.
          </p>
          <p className={paragraphClassName}>También utilizamos estos proveedores:</p>
          <ul className={listClassName}>
            <li>
              <strong>Tally BV</strong>, con sede en Bélgica, para mostrar el formulario, recoger las respuestas y
              recibir los archivos que decidas adjuntar.
            </li>
            <li>
              <strong>Airtable, operado por Formagrid Inc.</strong>, para almacenar y gestionar las respuestas del
              formulario y, cuando exista consentimiento, el perfil de la Talent Database. El acuerdo de
              tratamiento de datos entre Ad Astra y Airtable ya está formalizado.
            </li>
            <li>
              <strong>Google Workspace</strong>, para gestionar las comunicaciones y, cuando sea necesario,
              documentos de trabajo. La cuenta pertenece al entorno institucional de UC3M y está administrada por
              la Universidad.
            </li>
            <li>
              <strong>Vercel</strong>, exclusivamente para alojar la página web y tratar los datos técnicos
              necesarios para mostrarla. No almacenará fotografías, respuestas, CV ni perfiles personales.
            </li>
            <li>
              <strong>ImageKit Private Limited</strong>, para almacenar, optimizar y servir las imágenes de la web.
              No se utilizará para guardar respuestas, CV ni perfiles de la Talent Database; al cargar una imagen
              podrá recibir datos técnicos como la dirección IP, la URL solicitada y datos del navegador. El
              acuerdo de tratamiento de datos entre Ad Astra e ImageKit ya está formalizado.
            </li>
            <li>
              <strong>WhatsApp Ireland Limited</strong>, únicamente si decides entrar voluntariamente en el grupo
              de WhatsApp mediante el enlace que aparece después del envío.
            </li>
          </ul>
          <p className={paragraphClassName}>
            Ad Astra no entregará las respuestas a UC3M para que la Universidad las utilice con fines propios.
            Sin embargo, los administradores autorizados del entorno de Google Workspace de UC3M pueden disponer
            de capacidades técnicas de administración conforme a las políticas de la Universidad.
          </p>
          <p className={paragraphClassName}>
            Si autorizas la Talent Database, las empresas y demás entidades colaboradoras podrán recibir los
            datos identificativos, de contacto, académicos y profesionales de tu perfil que sean pertinentes para
            valorar una oportunidad o ponerse en contacto contigo en relación con ella. No recibirán tu NIA, las
            respuestas de motivación, las preferencias internas, las valoraciones de selección ni las notas de
            los responsables. No se les dará acceso a la base completa. Ad Astra no seleccionará perfiles para
            las entidades colaboradoras ni decidirá sobre sus procesos: únicamente compartirá, entre los datos
            enumerados en esta política, la información pertinente para cada oportunidad.
          </p>
          <p className={paragraphClassName}>
            Cada entidad colaboradora será responsable del tratamiento que realice después de recibir los datos y
            deberá facilitar su propia información de privacidad. Solo recibirá la información pertinente para la
            oportunidad correspondiente, no podrá incorporar el perfil a otra bolsa o base de talento sin una base
            jurídica válida y deberá atender las retiradas que Ad Astra le comunique, salvo que deba conservar
            determinada información por una obligación legal propia. Ad Astra registrará qué entidad ha recibido
            cada perfil y para qué finalidad.
          </p>
          <p className={paragraphClassName}>
            No comunicaremos tus datos a otras entidades salvo que resulte necesario para prestar los servicios
            descritos, exista una obligación legal o lo cubra la autorización específica que hayas otorgado.
          </p>
        </PolicySection>

        <PolicySection number="6" title="Transferencias internacionales">
          <p className={paragraphClassName}>
            Tally informa de que los datos principales de sus formularios se almacenan en Europa y de que su
            acuerdo de tratamiento de datos se incorpora a la relación con sus usuarios profesionales.
          </p>
          <p className={paragraphClassName}>
            Airtable está operado por Formagrid Inc., con sede en Estados Unidos, y la región predeterminada del
            servicio puede implicar el almacenamiento y tratamiento de las respuestas en ese país. Su acuerdo de
            tratamiento de datos incorpora las cláusulas contractuales tipo aprobadas por la Comisión Europea
            para las transferencias sujetas al RGPD.
          </p>
          <p className={paragraphClassName}>
            Google, Vercel, ImageKit, WhatsApp y sus subencargados también pueden utilizar infraestructura
            internacional. Cuando exista una transferencia fuera del Espacio Económico Europeo, se aplicarán las
            garantías reconocidas por el RGPD que correspondan, como una decisión de adecuación o las cláusulas
            contractuales tipo de la Comisión Europea.
          </p>
        </PolicySection>

        <PolicySection number="7" title="¿Durante cuánto tiempo conservaremos los datos?">
          <ul className={listClassName}>
            <li>
              <strong>Si tu solicitud no continúa o la retiras:</strong> eliminaremos los datos de la candidatura
              en un máximo de 12 meses desde la decisión final o la retirada.
            </li>
            <li>
              <strong>Si el proceso sigue activo:</strong> conservaremos la información hasta que se resuelva y,
              en cualquier caso, durante un máximo de 12 meses desde el envío de la solicitud.
            </li>
            <li>
              <strong>Si te incorporas como miembro del equipo o asociado/a de la comunidad:</strong> conservaremos
              los datos necesarios para gestionar tu vínculo mientras formes parte de Ad Astra. Las respuestas y
              valoraciones de admisión o selección que ya no hagan falta se eliminarán o anonimizarán y, en todo
              caso, se revisarán dentro de los 12 meses siguientes a la resolución del proceso.
            </li>
            <li>
              <strong>NIA:</strong> seguirá el plazo de tu candidatura si no te incorporas. Si te incorporas, se
              conservará mientras formes parte de Ad Astra y se eliminará de los sistemas de uso ordinario en un
              máximo de 90 días desde que termine ese vínculo, salvo el bloqueo exigible para atender
              responsabilidades legales.
            </li>
            <li>
              <strong>Talent Database:</strong> si das tu consentimiento y te incorporas, conservaremos las
              respuestas opcionales de perfil necesarias mientras formes parte de Ad Astra y mantengas ese
              consentimiento. Cuando lo retires o termine tu vínculo con la asociación, dejaremos de utilizar el
              perfil, lo eliminaremos de la base activa y comunicaremos la retirada a las entidades colaboradoras
              a las que se lo hubiéramos facilitado para que cesen en los usos basados en ese consentimiento,
              salvo que deban conservar información por una obligación legal propia. Ad Astra podrá conservar la
              evidencia mínima y restringida que sea necesaria para atender posibles responsabilidades.
            </li>
            <li>
              <strong>Pruebas de información y consentimiento:</strong> podremos conservar la evidencia mínima
              necesaria, con acceso restringido, durante los plazos en los que puedan surgir responsabilidades
              legales.
            </li>
            <li>
              <strong>Grupo de WhatsApp:</strong> tu participación se mantendrá mientras el grupo siga sirviendo
              para las finalidades explicadas y tú decidas permanecer en él.
            </li>
          </ul>
          <p className={paragraphClassName}>
            Los resultados estadísticos anonimizados de manera irreversible podrán conservarse durante más
            tiempo porque ya no permitirán identificarte. La eliminación se aplicará a las copias controladas por
            Ad Astra en Tally, Airtable, Google Workspace y las exportaciones que se hayan realizado, sin
            perjuicio de los ciclos técnicos de copia de seguridad de cada proveedor.
          </p>
        </PolicySection>

        <PolicySection number="8" title="Talent Database">
          <p className={paragraphClassName}>
            La Talent Database es completamente opcional. Solo se activará si te incorporas a Ad Astra y has
            marcado su casilla específica. Si no te incorporas, las respuestas seguirán el plazo de eliminación
            de la candidatura y no se utilizarán para enviarte oportunidades.
          </p>
          <p className={paragraphClassName}>
            El perfil podrá incluir tu nombre, los datos académicos y de contacto necesarios, los enlaces
            profesionales o el CV que hayas facilitado y tus respuestas sobre herramientas, experiencia e
            intereses. El NIA, las respuestas de motivación, las preferencias internas, las valoraciones de
            selección y las notas de los responsables no formarán parte del perfil de talento utilizado para
            buscar oportunidades.
          </p>
          <p className={paragraphClassName}>
            Ad Astra utilizará ese perfil para enviarte por correo oportunidades que puedan encajar contigo.
            También podrá presentar o comunicar a entidades colaboradoras los datos identificativos, de contacto,
            académicos y profesionales enumerados en esta política que sean pertinentes para que valoren tu encaje
            o se pongan en contacto contigo en relación con una oportunidad. Ad Astra no realizará la selección
            por cuenta de la entidad colaboradora ni decidirá sobre su proceso. La autorización inicial cubre
            estas comunicaciones, por lo que no se solicitará un consentimiento adicional para cada entidad u
            oportunidad.
          </p>
          <p className={paragraphClassName}>
            El perfil no será público ni se facilitará como parte de una base completa. Los perfiles de quienes se
            incorporen al equipo o a la comunidad podrán utilizarse para elaborar y compartir estadísticas
            agregadas o anonimizadas, siempre que no permitan identificar a ninguna persona.
          </p>
          <p className={paragraphClassName}>
            Los correos de oportunidades permiten darte de baja en cualquier momento mediante el formulario
            disponible en <ExternalLink href={OPPORTUNITIES_UNSUBSCRIBE_URL}>{OPPORTUNITIES_UNSUBSCRIBE_URL}</ExternalLink>.
            Al solicitar la baja dejaremos de enviarte nuevos correos de oportunidades. También puedes retirar
            por completo tu consentimiento para la Talent Database mediante el mismo formulario o escribiendo a{" "}
            <MailLink />.
          </p>
          <p className={paragraphClassName}>
            Puedes retirar el consentimiento en cualquier momento escribiendo a <MailLink />. Dejaremos de
            realizar nuevos usos, retiraremos el perfil de la base activa, dejaremos de enviarte oportunidades y
            comunicaremos la retirada a las entidades colaboradoras a las que se hubiera facilitado el perfil
            para que dejen de utilizarlo y lo eliminen cuando corresponda. La retirada no afecta a la licitud del
            tratamiento realizado antes de recibirla ni a la conservación que una entidad deba realizar por una
            obligación legal propia. Podremos conservar únicamente la evidencia mínima y restringida necesaria
            para demostrar la información mostrada, el consentimiento otorgado, las comunicaciones realizadas y
            su retirada.
          </p>
        </PolicySection>

        <PolicySection number="9" title="Grupo de WhatsApp">
          <p className={paragraphClassName}>
            Entrar en el grupo será voluntario. No te añadiremos automáticamente ni recogeremos tu teléfono en el
            formulario para esa finalidad: después del envío encontrarás un enlace para que decidas si quieres
            unirte. La información necesaria sobre tu solicitud y tu incorporación también se enviará por correo
            electrónico.
          </p>
          <p className={paragraphClassName}>
            En un grupo de WhatsApp, tu número de teléfono y, según tu configuración, tu nombre, fotografía y
            otros datos del perfil pueden ser visibles para las demás personas del grupo. Los mensajes y archivos
            también pueden guardarse o reenviarse.
          </p>
          <p className={paragraphClassName}>
            El grupo se utilizará para compartir novedades y coordinar actividades relacionadas con Ad Astra.
            Revisaremos periódicamente sus miembros y administradores. Puedes abandonarlo en cualquier momento.
          </p>
        </PolicySection>

        <PolicySection number="10" title="¿Se tomarán decisiones automáticas?">
          <p className={paragraphClassName}>
            No utilizaremos algoritmos para decidir automáticamente sobre tu admisión o asignación ni
            elaboraremos perfiles automatizados con efectos jurídicos o similares. Las valoraciones y decisiones
            las realizarán personas autorizadas de Ad Astra.
          </p>
        </PolicySection>

        <PolicySection number="11" title="Tus derechos">
          <p className={paragraphClassName}>Puedes pedirnos, cuando corresponda:</p>
          <ul className={listClassName}>
            <li>acceso a los datos que tenemos sobre ti;</li>
            <li>rectificación de los datos incorrectos;</li>
            <li>supresión de los datos;</li>
            <li>limitación u oposición al tratamiento;</li>
            <li>portabilidad de los datos;</li>
            <li>retirada de cualquier consentimiento que hayas dado.</li>
          </ul>
          <p className={paragraphClassName}>
            Para ejercerlos, escribe a <MailLink /> y dinos qué necesitas. Solo solicitaremos información
            adicional para confirmar tu identidad cuando sea razonablemente necesario. Como regla general,
            responderemos en el plazo máximo de un mes.
          </p>
          <p className={paragraphClassName}>
            Cuando retires un consentimiento, la retirada no afectará a la licitud del tratamiento realizado
            anteriormente.
          </p>
          <p className={paragraphClassName}>
            Si consideras que el tratamiento de tus datos infringe la normativa o que no hemos atendido
            adecuadamente tus derechos, tienes derecho a presentar una reclamación ante la{" "}
            <ExternalLink href={AEPD_CLAIMS_URL}>
              Agencia Española de Protección de Datos (AEPD)
            </ExternalLink>.
          </p>
        </PolicySection>

        <PolicySection number="12" title="Cómo protegemos la información">
          <p className={paragraphClassName}>
            Limitaremos el acceso a las personas que realmente lo necesiten, utilizaremos autenticación en dos
            pasos siempre que esté disponible y revisaremos los permisos cuando cambien los responsables de la
            asociación. Separaremos, en la medida de lo posible, los datos de selección, los datos necesarios
            para gestionar a miembros y asociados y los perfiles opcionales de la Talent Database. No
            compartiremos bases completas ni enviaremos el NIA, valoraciones internas o respuestas ajenas a la
            finalidad de la oportunidad. Las comunicaciones de perfiles y CV a entidades colaboradoras se
            limitarán a personas autorizadas, se realizarán mediante canales adecuados y quedarán registradas.
          </p>
          <p className={paragraphClassName}>
            Conservaremos la fecha, la opción elegida y la versión de los textos mostrados cuando sea necesario
            para acreditar la información y los consentimientos. También revisaremos los accesos y eliminaremos
            los datos en Tally, Airtable, Google Workspace y las exportaciones conforme a los plazos indicados.
          </p>
        </PolicySection>

        <PolicySection number="13" title="Cambios en esta política">
          <p className={paragraphClassName}>
            Actualizaremos esta política si cambian el formulario, las finalidades, los proveedores o el
            funcionamiento de la inscripción, la asociación o la Talent Database. La versión vigente estará
            disponible en <ExternalLink href={POLICY_URL}>{POLICY_URL}</ExternalLink>.
          </p>
        </PolicySection>
      </article>
    </div>
  );
}
