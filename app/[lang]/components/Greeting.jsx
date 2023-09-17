import Image from 'next/image'
import pres from './images/pres.jpg'

export default function Greeting() {
  return (
    <div className=''>
      <div className='flex flex-wrap mb-10'>
        <div className='w-1/4 px-5'>
          <Image
            width={200}
            height={200}
            className='w-full rounded-md'
            src={pres}
          />
        </div>
        <div className='w-3/4 px-5 text-xl'>
          <p className='mb-4'>
            لقد تأسست كلية الطب بالجامعة الإسلامية عام 2006 وقد ولدت ناضجة حيث
            بدأت من حيث انتهت اليه أفضل كليات الطب في العالم المتقدم تعليماً
            وتدريباً، وقامت بتطبيق المعايير الدولية في الأداء والجودة ونتائج
            التعلم من أجل تحقيق هدفها المنشود في تخريج أطباء يمتلكون أفضل
            القدرات العلمية والسريرية حتى أصبحت الكلية في سنوات معدودة صرحاً
            شامخاً متميزاً ومنافساً قوياً بين أرقي كليات الطب محلياً واقليمياً
            بل وعالمياً.
          </p>
          <p>
            تتميز كلية الطب بحصولها على الاعتمادات الوطنية والعديد من الاعتمادات
            الدولية وتربطها اتفاقات تفاهم وشراكات عمل مع العديد من الجامعات
            والمؤسسات الصحية في كثير من دول العالم المتقدم. وتقوم الكلية بمنح
            الشهادة الجامعية” دكتور في الطب” بالإضافة الى اشرافها على العديد من
            برامج الدراسات العليا على مستوى الدبلوم وكذلك مستوى الماجستير.
          </p>
        </div>
      </div>
    <div className = "text-xl">
    <p className='mb-4'>
        ان مبنى كلية الطب لديه جميع المقومات والمرافق وقاعات الدروس والمختبرات
        المتقدمة للمرحلة الأساسية، وكذلك مختبرات التدريب السريري التي تحتوي على
        أحدث الأجهزة والدمى والبرامج التدريبية المتقدمة، كما أن الكلية أسست مركز
        حياة لتعزيز الجهوزية على الطوارئ والذي لديه اعتماد من جمعية القلب
        الأمريكية حيث يقوم المركز بتدريب طلبة كلية الطب والطواقم الصحية في وزارة
        الصحة والمؤسسات الصحية الوطنية بإجراء الدورات الأساسية والمتقدمة في
        الإسعافات الأولية والدورات المتخصصة في إنعاش القلب والجهوزية للطوارئ.
      </p>
      <p>
        يقوم بتدريب طلبة كلية الطب أفضل الكفاءات العلمية وأفضل الاستشاريين في
        قطاع غزة سواء كاموا ضمن الهيئة التدريسية بالكلية أو في مستشفيات وزارة
        الصحة، كما وتقوم الكلية سنوياً باستضافة وفود أجنبية متعددة منها وفد
        جامعة أكسفورد من أجل القيام بالتدريب السريري لطلبة الطب، كما وتستضيف
        وفوداً أخرى بصورة سنوية ليشاركوا كممتحنين خارجيين في الاختبارات السريرية
        (OSCE)، ومن الجدير بالذكر بأن هناك مساقات كاملة يتم تدريسها عن طريق وفود
        أجنبية من المملكة المتحدة وكندا منها مساقات الرعاية التلطيفية والأورام
        وأمراض الكلى، وقد كانت التغذية الراجعة من جميع الوفود تؤكد على وصول
        طلبتنا علمياً وعملياً الى المستوى العالمي.
      </p>
      </div>
    </div>
  )
}
