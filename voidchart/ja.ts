/**
 * VoidChart Japanese translations
 * Machine-assisted translations - Community review needed
 * These translations were generated with AI assistance and may not be
 * accurate for gaming terminology. Native speaker contributions welcome!
 */
import type { VoidChartTranslations } from '../types'

export const voidchartJa: VoidChartTranslations = {
  page: {
    backButton: 'ホーム',
    loading: '虚空の星図を読み込み中...'
  },
  pointsCounter: {
    points: 'ポイント',
    profound: '幽邃',
    profoundTooltip: '深淵（メジャーノード）'
  },
  skillTree: {
    noData: 'この虚空の星図にはデータが読み込まれていません。',
    runScraper: '虚空の星図を生成するにはスクレイパーを実行してください。',
    searchPlaceholder: 'ノードを検索...',
    reset: 'リセット',
    resetCurrent: '現在のノードをリセット',
    resetAll: '全てのノードをリセット',
    resetAllTitle: '全てのノードをリセット',
    resetAllConfirm: '全てのノードをリセットしますか？保存をしていない場合、リセットをすると元に戻すことができません。',
    cancel: 'キャンセル',
    resetAllButton: '全てリセット',
    toastSwitched: '{patchName}に切り替えました',
    toastReset: '{treeName}をリセットしました',
    toastResetAll: '全てのノードをリセットしました'
  },
  strategy: {
    tabLabel: '戦略',
    title: '戦略',
    timemark: 'タイムマーク',
    area: '異界',
    equipment: '使用',
    selectScalpel: 'メスを選択',
    selectProbe: 'プローブを選択',
    compassNumber: 'コンパス {number}',
    combinedEffects: '組み合わせ効果',
    effectTypes: {
      probe: 'プローブ',
      compass: 'コンパス',
      scalpel: 'メス'
    },
    dialogTitles: {
      probe: 'プローブを選択',
      scalpel: 'シーズンコンパスを選択',
      compass: 'コンパスを選択'
    },
    areas: {
      glacialAbyss: '氷河のアビス',
      blisteringLavaSea: '沸騰する炎の海',
      steelForge: '鋼鉄の地',
      thunderWastes: 'ブロント荒野',
      voidlands: 'ヴォイドランド'
    },
    timemarks: {
      profound: '幽邃',
      deepSpace: '深宇宙'
    }
  },
  treeNames: {
    commodities: '通貨',
    gear: '装備',
    legendarygear: '伝説装備',
    compass: 'コンパス',
    beacons: 'ビーコン',
    darksurge: 'ダークタイド',
    blacksail: 'ブラックセイル',
    cube: 'キューブ',
    aeterna: '迷宮',
    nightmare: 'ナイトメア',
    clockworkballet: '人形',
    folklore: '怪談',
    thefrozencanvas: '絵雪',
    arcana: 'タロット',
    sandlord: '巨頭',
    outlaw: '指名手配',
    overrealm: '畳界',
    godofwar: '戦争',
    godofhunting: '狩猟',
    godofmight: '怪力',
    godofmachine: '機械',
    cage: '牢獄',
    profound: '幽邃'
  },
  stats: {
    tabLabel: '統計',
    title: '統計',
    empty: '割り当てられたステータスがありません',
    nodeCount: '（{count} ノード）',
    timemarkOrAbove: 'タイムマーク {timemark} 以上：'
  },
  buildActions: {
    tooltips: {
      save: '保存',
      load: '読み込み',
      import: 'インポート',
      export: 'エクスポート',
      share: '共有',
      delete: '削除'
    },
    noSavedBuilds: '保存されたビルドがありません',
    saveModal: {
      title: 'ビルドを保存',
      warning: 'この操作はブラウザのローカルストレージにのみ保存されます。ポータブルファイルを作成するには{export}機能を使用してください。',
      warningBold: 'エクスポート',
      buildName: 'ビルド名',
      placeholder: 'ビルド名を入力...',
      errorNoName: 'ビルド名を入力してください',
      errorSaveFailed: 'ビルドの保存に失敗しました。ストレージが一杯かもしれません。',
      cancel: 'キャンセル',
      save: '保存'
    },
    exportModal: {
      title: 'ビルドをエクスポート',
      description: 'ビルドエクスポートファイルのファイル名を入力してください：',
      placeholder: 'マイビルド',
      extension: '.txt',
      download: 'ダウンロード'
    },
    importModal: {
      title: 'ビルドをインポート',
      tabPaste: 'コードを貼り付け',
      tabUpload: 'ファイルをアップロード',
      placeholder: 'ここにビルドコードを貼り付けてください...',
      dropText: '.txtファイルをここにドラッグ＆ドロップ',
      dropLink: 'クリックして選択',
      selected: '選択済み：',
      errors: {
        noCode: 'ビルドコードを入力してください',
        noFile: 'まずファイルを選択してください',
        invalidCode: '無効なビルドコード',
        patchUnavailable: 'ビルドに{patch}パッチが必要ですが、利用できません',
        applyFailed: 'ビルドの適用に失敗しました',
        wrongFileType: '.txtファイルを選択してください',
        readFailed: 'ファイルの読み込みに失敗しました'
      }
    },
    shareModal: {
      title: 'ビルドを共有',
      description: 'ビルドを共有するにはこのURLをコピーしてください：',
      close: '閉じる',
      copyUrl: 'URLをコピー'
    },
    toasts: {
      importSuccess: 'ビルドを正常にインポートしました！',
      loadSuccess: 'ビルド「{name}」を読み込みました！',
      deleteSuccess: 'ビルド「{name}」を削除しました',
      loadFailed: 'ビルドの読み込みに失敗しました',
      deleteFailed: 'ビルドの削除に失敗しました',
      saveSuccess: 'ビルド「{name}」を保存しました！',
      exportSuccess: 'ビルドを正常にエクスポートしました！',
      shareSuccess: '共有URLをクリップボードにコピーしました！'
    }
  },
  itemDialog: {
    searchPlaceholder: '検索...',
    clearSelection: '選択を解除',
    alreadySelected: '既に選択済み',
    noItems: 'アイテムが見つかりません'
  }
}
