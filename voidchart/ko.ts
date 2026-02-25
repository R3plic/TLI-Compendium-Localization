/**
 * VoidChart Korean translations
 * Machine-assisted translations - Community review needed
 * These translations were generated with AI assistance and may not be
 * accurate for gaming terminology. Native speaker contributions welcome!
 * 26-2-19 검수됨. Pyo
 */
import type { VoidChartTranslations } from '../types'

export const voidchartKo: VoidChartTranslations = {
  page: {
    backButton: '홈',
    loading: '재능 별무리 데이터 로딩 중...'
  },
  pointsCounter: {
    points: '포인트',
    profound: '그윽한',
    profoundTooltip: '그윽한 (주요 노드)'
  },
  skillTree: {
    noData: '이 재능 별무리에 대한 데이터가 없습니다.',
    runScraper: '재능 별무리 데이터를 생성하려면 스크래퍼를 실행하세요.',
    searchPlaceholder: '노드 검색...',
    reset: '초기화',
    resetCurrent: '현재 재능 별무리 초기화',
    resetAll: '모든 재능 별무리 초기화',
    resetAllTitle: '모든 재능 별무리 초기화',
    resetAllConfirm: '모든 재능 별무리를 초기화하시겠습니까? 이 작업은 되돌릴 수 없습니다.',
    cancel: '취소',
    resetAllButton: '모두 초기화',
    toastSwitched: '{patchName}로 전환됨',
    toastReset: '{treeName} 초기화됨',
    toastResetAll: '모든 재능 별무리가 초기화됨'
  },
  strategy: {
    tabLabel: '전략',
    title: '전략',
    timemark: '타임마크',
    area: '지역',
    equipment: '장비',
    selectScalpel: '메스 선택',
    selectProbe: '탐침 선택',
    compassNumber: '나침반 {number}',
    combinedEffects: '조합 효과',
    effectTypes: {
      probe: '탐침',
      compass: '나침반',
      scalpel: '메스'
    },
    dialogTitles: {
      probe: '탐침 선택',
      scalpel: '시즌 나침반 선택',
      compass: '나침반 선택'
    },
    areas: {
      glacialAbyss: '빙하 심연',
      blisteringLavaSea: '뜨거운 용암 바다',
      steelForge: '강철 용광로',
      thunderWastes: '천둥 황야',
      voidlands: '공허의 땅'
    },
    timemarks: {
      profound: '심연',
      deepSpace: '딥 스페이스'
    }
  },
  treeNames: {
    commodities: '상품',
    gear: '장비',
    legendarygear: '레전드 장비',
    compass: '나침반',
    beacons: '비콘',
    darksurge: '검은 물결',
    blacksail: '검은 돛',
    cube: '큐브',
    aeterna: '영원한 미궁',
    nightmare: '악몽',
    clockworkballet: '기계 인형',
    folklore: '괴담',
    thefrozencanvas: '설원',
    arcana: '타로',
    sandlord: '군주',
    outlaw: '수배',
    overrealm: '이계',
    godofwar: '전쟁의 신',
    godofhunting: '사냥의 신',
    godofmight: '힘의 신',
    godofmachine: '기계의 신',
    cage: '감옥',
    profound: '그윽한'
  },
  stats: {
    tabLabel: '통계',
    title: '통계',
    empty: '할당된 스탯 없음',
    nodeCount: '({count} 노드)',
    timemarkOrAbove: '타임마크 {timemark} 이상:'
  },
  buildActions: {
    tooltips: {
      save: '저장',
      load: '불러오기',
      import: '가져오기',
      export: '내보내기',
      share: '공유',
      delete: '삭제'
    },
    noSavedBuilds: '저장된 빌드 없음',
    saveModal: {
      title: '빌드 저장',
      warning: '이 작업은 브라우저의 로컬 저장소에만 저장됩니다. 이식 가능한 파일을 만들려면 {export} 기능을 사용하세요.',
      warningBold: '내보내기',
      buildName: '빌드 이름',
      placeholder: '빌드 이름 입력...',
      errorNoName: '빌드 이름을 입력하세요',
      errorSaveFailed: '빌드 저장에 실패했습니다. 저장 공간이 가득 찼을 수 있습니다.',
      cancel: '취소',
      save: '저장'
    },
    exportModal: {
      title: '빌드 내보내기',
      description: '빌드 내보내기 파일의 파일명을 입력하세요:',
      placeholder: '내-빌드',
      extension: '.txt',
      download: '다운로드'
    },
    importModal: {
      title: '빌드 가져오기',
      tabPaste: '코드 붙여넣기',
      tabUpload: '파일 업로드',
      placeholder: '빌드 코드를 여기에 붙여넣으세요...',
      dropText: '.txt 파일을 여기에 드래그 앤 드롭하세요',
      dropLink: '클릭하여 선택',
      selected: '선택됨:',
      errors: {
        noCode: '빌드 코드를 입력하세요',
        noFile: '먼저 파일을 선택하세요',
        invalidCode: '잘못된 빌드 코드',
        patchUnavailable: '빌드에 {patch} 패치가 필요하지만 사용할 수 없습니다',
        applyFailed: '빌드 적용에 실패했습니다',
        wrongFileType: '.txt 파일을 선택하세요',
        readFailed: '파일 읽기에 실패했습니다'
      }
    },
    shareModal: {
      title: '빌드 공유',
      description: '빌드를 공유하려면 이 URL을 복사하세요:',
      close: '닫기',
      copyUrl: 'URL 복사'
    },
    toasts: {
      importSuccess: '빌드를 성공적으로 가져왔습니다!',
      loadSuccess: '"{name}" 빌드를 불러왔습니다!',
      deleteSuccess: '"{name}" 빌드를 삭제했습니다',
      loadFailed: '빌드 불러오기에 실패했습니다',
      deleteFailed: '빌드 삭제에 실패했습니다',
      saveSuccess: '"{name}" 빌드를 저장했습니다!',
      exportSuccess: '빌드를 성공적으로 내보냈습니다!',
      shareSuccess: '공유 URL이 클립별무리에 복사되었습니다!'
    }
  },
  itemDialog: {
    searchPlaceholder: '검색...',
    clearSelection: '선택 해제',
    alreadySelected: '이미 선택됨',
    noItems: '아이템을 찾을 수 없습니다'
  }
}
