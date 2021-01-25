module.exports = {
    plugins: [
        'stylelint-order',
    ],
    rules: {

        /*
        **  Stylelint
        **  https://stylelint.io/user-guide/rules/list
        */

        /*
        **  !!! IMPORTANT !!!!
        **  COMMENTED RULES ARE DISABLED, BUT KEEPING THEM UNCOMMENTED CRASHES STYLELINT
        **  UNCOMMENT AND CHANGE THEM IF YOU NEED
        */

        /*
        **  Possible errors
        **  https://stylelint.io/user-guide/rules/list#possible-errors
        */

        //  Color
        'color-no-invalid-hex': true,

        //  Font family
        'font-family-no-duplicate-names': true,
        'font-family-no-missing-generic-family-keyword': true,

        //  Function
        'function-calc-no-invalid': true,
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,

        //  String
        'string-no-newline': true,

        //  Unit
        'unit-no-unknown': true,

        //  Property
        'property-no-unknown': [
            true,
            {
                ignoreSelectors: [':export'],
            },
        ],

        //  Keyframe declaration
        'keyframe-declaration-no-important': true,

        //  Declaration block
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,

        //  Block
        'block-no-empty': true,

        //  Selector
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['export'],
            },
        ],
        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': true,

        //  Media feature
        'media-feature-name-no-unknown': true,

        //  At-rule
        'at-rule-no-unknown': null,

        //  Comment
        'comment-no-empty': true,

        //  General / Sheet
        'no-descending-specificity': true,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-extra-semicolons': true,
        'no-invalid-double-slash-comments': true,


        /*
        **  Limit language features
        **  https://stylelint.io/user-guide/rules/list#limit-language-features
        */

        // Alpha-value
        'alpha-value-notation': 'number',

        // Hue
        'hue-degree-notation': 'number',

        //  Color
        'color-function-notation': 'legacy',
        'color-named': 'never',
        // 'color-no-hex': false,

        //  Length
        'length-zero-no-unit': true,

        // Font Weight
        'font-weight-notation': 'named-where-possible',

        //  Function
        // 'function-blacklist': false,
        'function-url-no-scheme-relative': true,
        // 'function-url-scheme-blacklist': false,
        // 'function-url-scheme-whitelist': false,
        // 'function-whitelist': false,

        //  Keyframes
        // 'keyframes-name-pattern': false,

        //  Number
        'number-max-precision': 2,

        // Time
        // 'time-min-milliseconds': false,

        // Unit
        'unit-blacklist': ['turn'],
        // 'unit-whitelist': false,

        //  Shorthand property
        'shorthand-property-no-redundant-values': true,

        //  Value
        'value-no-vendor-prefix': true,

        //  Custom property
        'custom-property-pattern': 'ga-.+',

        //  Property
        'property-blacklist': ['flex', 'flex-flow'],
        'property-no-vendor-prefix': true,
        // 'property-whitelist': false,

        //  Declaration
        // 'declaration-block-no-redundant-longhand-properties': false,
        'declaration-no-important': true,
        'declaration-property-unit-blacklist': {
            '/^animation/': ['ms'],
            '/^transition/': ['s'],
        },
        'declaration-property-unit-whitelist': {
            'line-height': [],
        },
        // 'declaration-property-value-blacklist': false,
        // 'declaration-property-value-whitelist': false,

        //  Declaration block
        'declaration-block-single-line-max-declarations': 1,

        //  Selector
        // 'selector-attribute-operator-blacklist': false,
        // 'selector-attribute-operator-whitelist': false,
        // 'selector-class-pattern': false,
        // 'selector-combinator-blacklist': false,
        // 'selector-combinator-whitelist': false,
        // 'selector-id-pattern': false,
        'selector-max-attribute': [
            1,
            {
                ignoreAttributes: ['/^data-/'],
            },
        ],
        // 'selector-max-class': false,
        // 'selector-max-combinators': false,
        // 'selector-max-compound-selectors': false,
        'selector-max-empty-lines': 0,
        // 'selector-max-id': false,
        // 'selector-max-pseudo-class': false,
        // 'selector-max-specificity': false,
        // 'selector-max-type': false,
        'selector-max-universal': 0,
        // 'selector-nested-pattern': false,
        // 'selector-no-qualifying-type': false,
        // 'selector-no-vendor-prefix': false,
        // 'selector-pseudo-class-blacklist': false,
        // 'selector-pseudo-class-whitelist': false,
        // 'selector-pseudo-element-blacklist': false,
        'selector-pseudo-element-colon-notation': 'double',
        // 'selector-pseudo-element-whitelist': false,

        //  Media feature
        // 'media-feature-name-blacklist': false,
        'media-feature-name-no-vendor-prefix': true,
        // 'media-feature-name-value-whitelist': false,
        // 'media-feature-name-whitelist': false,

        //  Custom media
        // 'custom-media-pattern': false,

        //  At-rule
        // 'at-rule-blacklist': false,
        'at-rule-no-vendor-prefix': true,
        'at-rule-property-requirelist': {
            'font-face': [
                'font-family',
                'font-style',
                'font-weight',
            ],
        },
        // 'at-rule-whitelist': false,

        //  Comment
        // 'comment-word-blacklist': false,

        //  General / Sheet
        'max-nesting-depth': 3,
        'no-unknown-animations': true,


        /*
        **  Stylistic issues
        **  https://stylelint.io/user-guide/rules/list#stylistic-issues
        */

        //  Color
        'color-hex-case': 'lower',
        'color-hex-length': 'short',

        //  Font family
        'font-family-name-quotes': 'always-where-recommended',

        //  Function
        'function-comma-newline-after': 'always-multi-line',
        'function-comma-newline-before': 'never-multi-line',
        'function-comma-space-after': 'always-single-line',
        'function-comma-space-before': 'never',
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': 'always-multi-line',
        'function-parentheses-space-inside': 'never-single-line',
        'function-url-quotes': 'always',
        'function-whitespace-after': 'always',

        //  Number
        'number-leading-zero': 'never',
        'number-no-trailing-zeros': true,

        //  String
        'string-quotes': 'single',

        //  Unit
        'unit-case': 'lower',

        //  Value
        'value-keyword-case': 'lower',

        //  Value list
        'value-list-comma-newline-after': 'always-multi-line',
        'value-list-comma-newline-before': 'never-multi-line',
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 1,

        // Custom property
        // 'custom-property-empty-line-before': false,

        //  Property
        // 'property-case': false,

        //  Declaration
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-newline-after': 'always-multi-line',
        // 'declaration-colon-space-after': 'always',
        'declaration-colon-space-before': 'never',
        // 'declaration-empty-line-before': false,

        //  Declaration block
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-trailing-semicolon': 'always',

        //  Block
        'block-closing-brace-empty-line-before': 'never',
        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always-multi-line',
        'block-closing-brace-space-after': 'always-single-line',
        'block-closing-brace-space-before': 'always-single-line',
        'block-opening-brace-newline-after': 'always',
        'block-opening-brace-newline-before': 'always',
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always-single-line',

        //  Selector
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-attribute-quotes': 'always',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-descendant-combinator-no-non-space': true,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-case': 'lower',
        'selector-type-case': 'lower',

        //  Selector list
        'selector-list-comma-newline-after': 'always-multi-line',
        'selector-list-comma-newline-before': 'never-multi-line',
        'selector-list-comma-space-after': 'always-single-line',
        'selector-list-comma-space-before': 'never',

        //  Rule
        'rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment'],
            },
        ],

        //  Media feature
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-case': 'lower',
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',

        //  Media query list
        'media-query-list-comma-newline-after': 'always-multi-line',
        'media-query-list-comma-newline-before': 'never-multi-line',
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never',

        //  At-rule
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['first-nested', 'blockless-after-same-name-blockless'],
                ignore: ['after-comment'],
                ignoreAtRules: ['import'],
            },
        ],
        'at-rule-name-case': 'lower',
        'at-rule-name-newline-after': 'always-multi-line',
        'at-rule-name-space-after': 'always',
        'at-rule-semicolon-newline-after': 'always',
        'at-rule-semicolon-space-before': 'never',

        //  Comment
        'comment-empty-line-before': 'always',
        'comment-whitespace-inside': 'always',

        //  General / Sheet
        'indentation': [
            4,
            {
                baseIndentLevel: 1,
            },
        ],
        'linebreaks': 'unix',
        'max-empty-lines': 2,
        // 'max-line-length': false,
        'no-eol-whitespace': true,
        'no-missing-end-of-source-newline': true,
        'no-empty-first-line': true,
        // 'unicode-bom': false,


        /*
        **  stylelint-order
        **  https://github.com/hudochenkov/stylelint-order
        */

        'order/properties-order': [
            [
                {
                    groupName: 'all',
                    properties: [
                        'all',
                    ],
                },
                {
                    groupName: 'appearance',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'appearance',
                    ],
                },
                {
                    groupName: 'contents',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'content',
                        'quotes',
                    ],
                },
                {
                    groupName: 'font-adjust',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        '-webkit-text-size-adjust',
                        '-ms-text-size-adjust',
                        'font-size-adjust',
                        'text-rendering',
                    ],
                },
                {
                    groupName: 'font-general',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'font',
                        'font-family',
                        'font-size',
                        'font-style',
                        'font-weight',
                        'font-variant',

                        'font-stretch',
                        'font-effect',
                        'font-emphasize',
                        'font-emphasize-position',
                        'font-emphasize-style',
                        'line-height',
                    ],
                },
                {
                    groupName: 'font-src',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'src',
                    ],
                },
                {
                    groupName: 'text-general',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'vertical-align',

                        'text-align',
                        'text-align-last',

                        'text-transform',
                        'text-decoration',

                        'text-indent',
                        'text-justify',
                        'text-outline',

                        'text-emphasis',
                        'text-emphasis-color',
                        'text-emphasis-style',
                        'text-emphasis-position',
                    ],
                },
                {
                    groupName: 'text-spacing',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'letter-spacing',
                        'word-spacing',
                    ],
                },
                {
                    groupName: 'text-formatting',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'white-space',
                        'word-break',
                        'word-wrap',
                        'overflow-wrap',

                        'text-overflow',
                        'text-overflow-ellipsis',
                        'text-overflow-mode',

                        'text-wrap',
                        'hyphens',
                    ],
                },
                {
                    groupName: 'tab-size',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'tab-size',
                    ],
                },
                {
                    groupName: 'table-and-list',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'table-layout',
                        'border-collapse',
                        'border-spacing',
                        'empty-cells',
                        'caption-side',

                        'list-style',
                        'list-style-position',
                        'list-style-type',
                        'list-style-image',
                    ],
                },
                {
                    groupName: 'counters',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'counter-reset',
                        'counter-increment',
                    ],
                },
                {
                    groupName: 'position',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'position',
                    ],
                },
                {
                    groupName: 'z-index',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'z-index',
                    ],
                },
                {
                    groupName: 'position-params',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'top',
                        'right',
                        'bottom',
                        'left',
                    ],
                },
                {
                    groupName: 'display',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'display',
                    ],
                },
                {
                    groupName: 'flex-and-grid',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'flex',
                        'flex-basis',
                        'flex-direction',
                        'flex-flow',
                        'flex-grow',
                        'flex-shrink',
                        'flex-wrap',

                        'grid',
                        'grid-area',
                        'grid-template',
                        'grid-template-areas',
                        'grid-template-rows',
                        'grid-template-columns',
                        'grid-row',
                        'grid-row-start',
                        'grid-row-end',
                        'grid-column',
                        'grid-column-start',
                        'grid-column-end',
                        'grid-auto-rows',
                        'grid-auto-columns',
                        'grid-auto-flow',
                        'grid-gap',
                        'grid-row-gap',
                        'grid-column-gap',

                        'gap',
                        'row-gap',
                        'column-gap',
                    ],
                },
                {
                    groupName: 'flex-align-and-justify',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'align-content',
                        'align-items',
                        'justify-content',
                        'justify-items',
                    ],
                },
                {
                    groupName: 'flex-self',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'flex-grow',
                        'flex-shrink',
                        'align-self',
                        'justify-self',
                    ],
                },
                {
                    groupName: 'flex-order',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'order',
                    ],
                },
                {
                    groupName: 'columns',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'columns',
                        'column-gap',
                        'column-fill',
                        'column-rule',
                        'column-span',
                        'column-count',
                        'column-width',
                    ],
                },
                {
                    groupName: 'float',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'float',
                        'clear',
                    ],
                },
                {
                    groupName: 'overflow',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'overflow',
                        'overflow-x',
                        'overflow-y',
                    ],
                },
                {
                    groupName: 'scroll',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'touch-action',
                        'scroll-behavior',
                        'overscroll-behavior',
                        '-webkit-overflow-scrolling',
                    ],
                },
                {
                    groupName: 'clip',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'clip',
                        'clip-path',
                    ],
                },
                {
                    groupName: 'size',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'object-fit',
                        'width',
                        'height',
                    ],
                },
                {
                    groupName: 'size-ranges',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'min-width',
                        'max-width',
                        'min-height',
                        'max-height',
                    ],
                },
                {
                    groupName: 'box-model',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'margin',
                        'margin-top',
                        'margin-right',
                        'margin-bottom',
                        'margin-left',

                        'padding',
                        'padding-top',
                        'padding-right',
                        'padding-bottom',
                        'padding-left',

                        'border',
                        'border-width',
                        'border-style',
                        'border-color',
                        'border-top',
                        'border-top-width',
                        'border-top-style',
                        'border-top-color',
                        'border-right',
                        'border-right-width',
                        'border-right-style',
                        'border-right-color',
                        'border-bottom',
                        'border-bottom-width',
                        'border-bottom-style',
                        'border-bottom-color',
                        'border-left',
                        'border-left-width',
                        'border-left-style',
                        'border-left-color',
                        'border-radius',
                        'border-top-left-radius',
                        'border-top-right-radius',
                        'border-bottom-right-radius',
                        'border-bottom-left-radius',
                        'border-image',
                        'border-image-source',
                        'border-image-slice',
                        'border-image-width',
                        'border-image-outset',
                        'border-image-repeat',
                    ],
                },
                {
                    groupName: 'outline',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'outline',
                        'outline-width',
                        'outline-style',
                        'outline-color',
                        'outline-offset',
                    ],
                },
                {
                    groupName: 'box-sizing',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'box-sizing',
                    ],
                },
                {
                    groupName: 'foreground-and-background',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'color',
                        'caret-color',

                        'background',
                        'background-color',
                        'background-image',
                        'background-attachment',
                        'background-position',
                        'background-position-x',
                        'background-position-y',
                        'background-clip',
                        'background-origin',
                        'background-size',
                        'background-repeat',
                        'background-blend-mode',
                    ],
                },
                {
                    groupName: 'svg-related',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'alignment-baseline',
                        'baseline-shift',
                        'dominant-baseline',
                        'text-anchor',
                        'word-spacing',
                        'writing-mode',

                        'fill',
                        'fill-opacity',
                        'fill-rule',
                        'stroke',
                        'stroke-dasharray',
                        'stroke-dashoffset',
                        'stroke-linecap',
                        'stroke-linejoin',
                        'stroke-miterlimit',
                        'stroke-opacity',
                        'stroke-width',

                        'color-interpolation',
                        'color-interpolation-filters',
                        'color-profile',
                        'color-rendering',
                        'flood-color',
                        'flood-opacity',
                        'image-rendering',
                        'lighting-color',
                        'marker-start',
                        'marker-mid',
                        'marker-end',
                        'mask',
                        'shape-rendering',
                        'stop-color',
                        'stop-opacity',
                    ],
                },
                {
                    groupName: 'shadows',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'text-shadow',
                        'box-shadow',
                        'box-decoration-break',
                    ],
                },
                {
                    groupName: 'nav',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'nav-index',
                        'nav-up',
                        'nav-right',
                        'nav-down',
                        'nav-left',
                    ],
                },
                {
                    groupName: 'opacity',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'opacity',
                    ],
                },
                {
                    groupName: 'visibility',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'visibility',
                    ],
                },
                {
                    groupName: 'filters',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'filter',
                        'backdrop-filter',
                        'mix-blend-mode',
                        'isolation',
                    ],
                },
                {
                    groupName: 'pointer-events',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'pointer-events',
                    ],
                },
                {
                    groupName: 'cursor',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'cursor',
                    ],
                },
                {
                    groupName: 'transform',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'transform',
                        'transform-box',
                        'transform-style',
                        'transform-origin',
                    ],
                },
                {
                    groupName: '3d-transform',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'perspective',
                        'perspective-origin',
                        'backface-visibility',
                    ],
                },
                {
                    groupName: 'transition',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'transition',
                        'transition-property',
                        'transition-timing-function',
                        'transition-delay',
                        'transition-duration',
                    ],
                },
                {
                    groupName: 'animation',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'animation',
                        'animation-name',
                        'animation-direction',
                        'animation-timing-function',
                        'animation-delay',
                        'animation-duration',
                        'animation-iteration-count',
                        'animation-play-state',
                    ],
                },
                {
                    groupName: 'gpu-acceleration',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'backface-visibility',
                        'will-change',
                    ],
                },
                {
                    groupName: 'user-select',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'user-select',
                    ],
                },
                {
                    groupName: 'resize',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'resize',
                    ],
                },
                {
                    groupName: 'speak',
                    noEmptyLineBetween: true,
                    emptyLineBefore: 'always',
                    properties: [
                        'speak',
                        'speak-as',
                    ],
                },
            ],
        ],
    },
};
