// patents.js

// 국제 특허
const intlPatents = [
  { title: 'DATA AUGMENTATION TECHNIQUE OPTIMIZED FOR STABLE AND UNSTABLE EXTRACHROMOSOMAL MULTI-OBJECT IMAGES (안정형 및 불안정형 염색체 외 멀티 오브젝트 이미지에 최적화된 데이터 증강 기법)', inventors: '이인경, 양세정, 한중훈', regNo: 'PCT/KR2025/011030', year: '2025' },
  { title: 'Apparatus and method for imaging examination of cells on surface of living tissue using moxifloxacin (목시플록사신을 이용하여 생체조직의 표면상에 세포의 영상 조사를 위한 장치와 방법)', inventors: '김기현, 이중빈, 김성한, 윤창호, 양세정', regNo: '12,320,732', year: '2025' }
];

// 국내 특허
const domesticPatents = [
  { title: '영상 증강을 이용한 안정형 염색체의 계수 방법 및 이를 위한 계수 장치', inventors: '이인경, 양세정, 한중훈, 강승영', appNo: '10-2022-0161395', regNo: '10-2982752', year: '2026' },
  { title: '영상 증강을 이용한 염색체의 계수 방법 및 이를 위한 계수 장치', inventors: '이인경, 양세정, 한중훈, 강승영', appNo: '10-2022-0161394', regNo: '10-2982745', year: '2026' },
  { title: '생성적 대립 신경망(GAN, Generative Adversarial Network)을 활용한 주사투과전자현미경 영상에서의 노이즈 제거 방법', inventors: '양세정, 한중훈, 추유성, 최시영, 고경준, 양동환', appNo: '10-2023-0019322', regNo: '10-2826899', year: '2025' },
  { title: '저차원 재료의 원자 이미지 분석 방법', inventors: '양세정, 한중훈, 추유성, 최시영, Okello NgomeODONGO FRANCIS, 양동환, 고경준, 김기엽', appNo: '1020190158224', regNo: '102253227', year: '2021' },
  { title: '주사투과전자현미경 이미지에서의 원자 구조 해석 방법', inventors: '양세정, 고경준, 양동환, 최시영, 한중훈, 이지영, 안홍기', appNo: '1020190154820', regNo: '102338050', year: '2021' },
  { title: '관상동맥 조영 영상을 이용한 심장 협착증 진단 알고리즘', inventors: '양세정, 윤영진, 이지영, 안홍기, 박무열, 이채원', appNo: '1020200033550', regNo: '102361354', year: '2022' },
  { title: '딥러닝을 이용한 흑색종 진단 방법', inventors: '양세정, 정기양, 오병호, 이솔암, 고상백, 유상균, 추유성', appNo: '1020190082152', regNo: '102297242', year: '2021' },
  { title: '피부로부터 상처를 분할하기 위한 영상 처리 방법 및 영상 처리 장치', inventors: '양세정, 이하늘, 이병욱', appNo: '1020150064070', regNo: '1016618530000', year: '2016' },
  { title: '흑색종의 병변 판단 장치 및 방법', inventors: '양세정, 오병호, 이병욱, 정기양, 함성원', appNo: '1020140101918', regNo: '1016121880000', year: '2016' },
  { title: '채도 향상을 위한 영상 처리 장치 및 방법', inventors: '양세정, 이병욱', appNo: '1020120153238', regNo: '1013593700000', year: '2014' },
  { title: 'MRI 용 귀덮개(EAR COVER FOR MRI)', inventors: '양세정, 김동현, 김한성, 김민오, 양승욱, 조웅희', appNo: '1020090074727', regNo: '1011185470000', year: '2012' },
  { title: '실제배출유량률 표시형 볼밸브', inventors: '양세정', appNo: '1020070015738', regNo: '1010506370000', year: '2011' },
  { title: '카메라 색상 특성 곡선을 이용한 영상 밝기 변화에 따른 색 보정 방법', inventors: '양세정, 이병욱, 김윤아', appNo: '1020090035058', regNo: '1010056250000', year: '2010' },
  { title: '정준부호숫자를 이용한 가역 색상 변환 방법', inventors: '양세정, 이병욱', appNo: '1020080079109', regNo: '1009824420000', year: '2010' },
  { title: '워엄 기어형 정량 조절밸브', inventors: '양세정', appNo: '1020070045915', regNo: '1008643540000', year: '2008' },
  { title: '소방용 발광 템퍼 밸브', inventors: '양세정', appNo: '1020070063663', regNo: '1008350890000', year: '2008' },
  { title: '버터 플라이 밸브', inventors: '양세정', appNo: '1020050094711', regNo: '1007264440000', year: '2007' },
  { title: '동파이프용 절연 버터플라이 밸브', inventors: '양세정', appNo: '1020050032396', regNo: '1006945060000', year: '2007' },
  { title: '레버형 정량 조절용 버터플라이 밸브', inventors: '양세정', appNo: '1020060072955', regNo: '1006636380000', year: '2006' },
  { title: '보간 필터를 구비한 CIC 필터 및 그 설계방법', inventors: '장영범, 양세정', appNo: '1020030032244', regNo: '1006289410000', year: '2006' }
];
