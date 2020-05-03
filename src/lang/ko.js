/**
 * Korean translate
 * damulhan (http://github.com/damulhan) 
 * @type Object
 */
const ko = {
  btn: {
    about: '설명',
    back: '뒤로',
    cancel: '취소',
    clear: '지우기',
    copy: '복사',
    cut: '잘라내기',
    delete: '삭제',
    edit: '편집',
    forward: '앞으로',
    folder: '새 폴더',
    file: '새 파일',
    fullScreen: '전체 화면',
    grid: '격자',
    paste: '붙여넣기',
    refresh: '새로 고침',
    submit: '제출',
    table: '테이블',
    upload: '업로드',
    uploadSelect: '파일 선택',
    hidden: ' 숨겨진 파일',
  },
  clipboard: {
    actionType: '타입',
    copy: '복사',
    cut: '잘라내기',
    none: '선택 항목 없음',
    title: '클립보드',
  },
  contextMenu: {
    copy: '복사',
    cut: '잘라내기',
    delete: '삭제',
    download: '다운로드',
    info: '선택:',
    open: '열기',
    paste: '붙여넣기',
    properties: '항목정보',
    rename: '이름 변경',
    select: '선택',
    view: '보기',
    zip: '압축하기',
    unzip: '해제하기',
    edit: '편집하기',
    audioPlay: '오디오 플레이',
    videoPlay: '비이오 플레이',
  },
  info: {
    directories: '폴더:',
    files: '파일:',
    selected: '선택:',
    selectedSize: '선택항목 파일 크기:',
    size: '파일 크기:',
  },
  manager: {
    table: {
      date: '날짜',
      folder: '폴더',
      name: '이름',
      size: '크기',
      type: '형식',
    },
  },
  modal: {
    about: {
      developer: '개발자',
      name: '파일관리자',
      title: '설명',
      version: '버전',
    },
    delete: {
      noSelected: '선택 항목 없음!',
      title: '삭제',
    },
    newFile: {
      fieldName: '파일 이름',
      fieldFeedback: '파일 있음!',
      title: '새 파일 생성',
    },
    newFolder: {
      fieldName: '폴더 이름',
      fieldFeedback: '폴더 있음!',
      title: '새 폴더 생ㅅ어',
    },
    preview: {
      title: '미리 보기',
    },
    properties: {
      disk: '디스크',
      modified: '수정됨',
      name: '이름',
      path: '경로',
      size: '크기',
      title: '세부정보',
      type: '형식',
      url: 'URL',
      access: '접속',
      access_0: '접속 제한',
      access_1: '읽기 전용',
      access_2: '읽기 및 쓰기',
    },
    rename: {
      directoryExist: '폴더 존재함',
      fieldName: '이름 입력',
      fieldFeedback: '잘못된 이름',
      fileExist: '파일 존재함',
      title: '이름 변경',
    },
    status: {
      noErrors: '오류 없음!',
      title: '상태',
    },
    upload: {
      ifExist: '파일이 존재하면:',
      noSelected: '파일 선택 항목 없음!',
      overwrite: '덮어 쓰기!',
      selected: '선택 됨:',
      size: '크기:',
      skip: '건너 뛰기',
      title: '파일 업로드',
    },
    editor: {
      title: '편집기',
    },
    audioPlayer: {
      title: '오디오 재생기',
    },
    videoPlayer: {
      title: '비디오 재생기',
    },
    zip: {
      title: 'Create archive',
      fieldName: 'Archive name',
      fieldFeedback: 'Archive exists!',
    },
    unzip: {
      title: '압축 풀기',
      fieldName: '폴더 이름',
      fieldRadioName: '압축풀 위치:',
      fieldRadio1: '현재 폴더로',
      fieldRadio2: '새 폴더로',
      fieldFeedback: '폴더 존재함!',
      warning: '경고! 이름이 동일하면 파일이 덮어쓰기 됩니다.',
    },
    cropper: {
      title: '잘라내기',
      apply: '적용',
      reset: '리셋',
      save: '저장',
    },
  },
  notifications: {
    cutToClipboard: '클립보드에 잘라내기!',
    copyToClipboard: '클립보드에 복사!',
  },
  response: {
    noConfig: '설정 없음!',
    notFound: '없음!',
    diskNotFound: '디스크 없음!',
    pathNotFound: '경로 없음!',
    diskSelected: '디스크 선택됨!',
    // files
    fileExist: '이미 파일이 존재합니다!',
    fileCreated: '파일을 생성하였습니다!',
    fileUpdated: '파일을 변경하였습니다!',
    fileNotFound: '파일이 없습니다!',
    // directories
    dirExist: '폴더가 이미 존재합니다!',
    dirCreated: '폴더를 생성하였습니다!',
    dirNotFound: '폴더가 없습니다',
    // actions
    uploaded: '모든 파일을 업로드 하였습니다!',
    notAllUploaded: '일부 파일은 업로드하지 못하였습니다!',
    delNotFound: '일부 항목은 찾을수 없습니다!',
    deleted: '삭제함!',
    renamed: '이름 변경함!',
    copied: '이름을 복사함!',
    // zip
    zipError: '압축파일 생성 실패!',
    // acl
    aclError: '접속 제한됨!',
  },
};

export default ko;
