// Generated from ./parser/JavaParser.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { JavaParserListener } from "./JavaParserListener.js";
import { JavaParserVisitor } from "./JavaParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class JavaParser extends antlr.Parser {
    public static readonly ABSTRACT = 1;
    public static readonly ASSERT = 2;
    public static readonly BOOLEAN = 3;
    public static readonly BREAK = 4;
    public static readonly BYTE = 5;
    public static readonly CASE = 6;
    public static readonly CATCH = 7;
    public static readonly CHAR = 8;
    public static readonly CLASS = 9;
    public static readonly CONST = 10;
    public static readonly CONTINUE = 11;
    public static readonly DEFAULT = 12;
    public static readonly DO = 13;
    public static readonly DOUBLE = 14;
    public static readonly ELSE = 15;
    public static readonly ENUM = 16;
    public static readonly EXTENDS = 17;
    public static readonly FINAL = 18;
    public static readonly FINALLY = 19;
    public static readonly FLOAT = 20;
    public static readonly FOR = 21;
    public static readonly IF = 22;
    public static readonly GOTO = 23;
    public static readonly IMPLEMENTS = 24;
    public static readonly IMPORT = 25;
    public static readonly INSTANCEOF = 26;
    public static readonly INT = 27;
    public static readonly INTERFACE = 28;
    public static readonly LONG = 29;
    public static readonly NATIVE = 30;
    public static readonly NEW = 31;
    public static readonly PACKAGE = 32;
    public static readonly PRIVATE = 33;
    public static readonly PROTECTED = 34;
    public static readonly PUBLIC = 35;
    public static readonly RETURN = 36;
    public static readonly SHORT = 37;
    public static readonly STATIC = 38;
    public static readonly STRICTFP = 39;
    public static readonly SUPER = 40;
    public static readonly SWITCH = 41;
    public static readonly SYNCHRONIZED = 42;
    public static readonly THIS = 43;
    public static readonly THROW = 44;
    public static readonly THROWS = 45;
    public static readonly TRANSIENT = 46;
    public static readonly TRY = 47;
    public static readonly VOID = 48;
    public static readonly VOLATILE = 49;
    public static readonly WHILE = 50;
    public static readonly MODULE = 51;
    public static readonly OPEN = 52;
    public static readonly REQUIRES = 53;
    public static readonly EXPORTS = 54;
    public static readonly OPENS = 55;
    public static readonly TO = 56;
    public static readonly USES = 57;
    public static readonly PROVIDES = 58;
    public static readonly WITH = 59;
    public static readonly TRANSITIVE = 60;
    public static readonly VAR = 61;
    public static readonly YIELD = 62;
    public static readonly RECORD = 63;
    public static readonly SEALED = 64;
    public static readonly PERMITS = 65;
    public static readonly NON_SEALED = 66;
    public static readonly DECIMAL_LITERAL = 67;
    public static readonly HEX_LITERAL = 68;
    public static readonly OCT_LITERAL = 69;
    public static readonly BINARY_LITERAL = 70;
    public static readonly FLOAT_LITERAL = 71;
    public static readonly HEX_FLOAT_LITERAL = 72;
    public static readonly BOOL_LITERAL = 73;
    public static readonly CHAR_LITERAL = 74;
    public static readonly STRING_LITERAL = 75;
    public static readonly TEXT_BLOCK = 76;
    public static readonly NULL_LITERAL = 77;
    public static readonly LPAREN = 78;
    public static readonly RPAREN = 79;
    public static readonly LBRACE = 80;
    public static readonly RBRACE = 81;
    public static readonly LBRACK = 82;
    public static readonly RBRACK = 83;
    public static readonly SEMI = 84;
    public static readonly COMMA = 85;
    public static readonly DOT = 86;
    public static readonly ASSIGN = 87;
    public static readonly GT = 88;
    public static readonly LT = 89;
    public static readonly BANG = 90;
    public static readonly TILDE = 91;
    public static readonly QUESTION = 92;
    public static readonly COLON = 93;
    public static readonly EQUAL = 94;
    public static readonly LE = 95;
    public static readonly GE = 96;
    public static readonly NOTEQUAL = 97;
    public static readonly AND = 98;
    public static readonly OR = 99;
    public static readonly INC = 100;
    public static readonly DEC = 101;
    public static readonly ADD = 102;
    public static readonly SUB = 103;
    public static readonly MUL = 104;
    public static readonly DIV = 105;
    public static readonly BITAND = 106;
    public static readonly BITOR = 107;
    public static readonly CARET = 108;
    public static readonly MOD = 109;
    public static readonly ADD_ASSIGN = 110;
    public static readonly SUB_ASSIGN = 111;
    public static readonly MUL_ASSIGN = 112;
    public static readonly DIV_ASSIGN = 113;
    public static readonly AND_ASSIGN = 114;
    public static readonly OR_ASSIGN = 115;
    public static readonly XOR_ASSIGN = 116;
    public static readonly MOD_ASSIGN = 117;
    public static readonly LSHIFT_ASSIGN = 118;
    public static readonly RSHIFT_ASSIGN = 119;
    public static readonly URSHIFT_ASSIGN = 120;
    public static readonly ARROW = 121;
    public static readonly COLONCOLON = 122;
    public static readonly AT = 123;
    public static readonly ELLIPSIS = 124;
    public static readonly WS = 125;
    public static readonly JSNI_COMMENT = 126;
    public static readonly COMMENT = 127;
    public static readonly LINE_COMMENT = 128;
    public static readonly IDENTIFIER = 129;
    public static readonly RULE_compilationUnit = 0;
    public static readonly RULE_packageDeclaration = 1;
    public static readonly RULE_importDeclaration = 2;
    public static readonly RULE_typeDeclaration = 3;
    public static readonly RULE_modifier = 4;
    public static readonly RULE_classOrInterfaceModifier = 5;
    public static readonly RULE_variableModifier = 6;
    public static readonly RULE_classDeclaration = 7;
    public static readonly RULE_typeParameters = 8;
    public static readonly RULE_typeParameter = 9;
    public static readonly RULE_typeBound = 10;
    public static readonly RULE_enumDeclaration = 11;
    public static readonly RULE_enumConstants = 12;
    public static readonly RULE_enumConstant = 13;
    public static readonly RULE_enumBodyDeclarations = 14;
    public static readonly RULE_interfaceDeclaration = 15;
    public static readonly RULE_classBody = 16;
    public static readonly RULE_interfaceBody = 17;
    public static readonly RULE_classBodyDeclaration = 18;
    public static readonly RULE_memberDeclaration = 19;
    public static readonly RULE_methodDeclaration = 20;
    public static readonly RULE_jsniMethodDeclaration = 21;
    public static readonly RULE_methodBody = 22;
    public static readonly RULE_typeTypeOrVoid = 23;
    public static readonly RULE_genericMethodDeclaration = 24;
    public static readonly RULE_genericConstructorDeclaration = 25;
    public static readonly RULE_constructorDeclaration = 26;
    public static readonly RULE_fieldDeclaration = 27;
    public static readonly RULE_interfaceBodyDeclaration = 28;
    public static readonly RULE_interfaceMemberDeclaration = 29;
    public static readonly RULE_constDeclaration = 30;
    public static readonly RULE_constantDeclarator = 31;
    public static readonly RULE_interfaceMethodDeclaration = 32;
    public static readonly RULE_interfaceMethodModifier = 33;
    public static readonly RULE_genericInterfaceMethodDeclaration = 34;
    public static readonly RULE_interfaceCommonBodyDeclaration = 35;
    public static readonly RULE_variableDeclarators = 36;
    public static readonly RULE_variableDeclarator = 37;
    public static readonly RULE_variableDeclaratorId = 38;
    public static readonly RULE_variableInitializer = 39;
    public static readonly RULE_arrayInitializer = 40;
    public static readonly RULE_classOrInterfaceType = 41;
    public static readonly RULE_typeArgument = 42;
    public static readonly RULE_qualifiedNameList = 43;
    public static readonly RULE_formalParameters = 44;
    public static readonly RULE_receiverParameter = 45;
    public static readonly RULE_formalParameterList = 46;
    public static readonly RULE_formalParameter = 47;
    public static readonly RULE_lastFormalParameter = 48;
    public static readonly RULE_lambdaLVTIList = 49;
    public static readonly RULE_lambdaLVTIParameter = 50;
    public static readonly RULE_qualifiedName = 51;
    public static readonly RULE_literal = 52;
    public static readonly RULE_integerLiteral = 53;
    public static readonly RULE_floatLiteral = 54;
    public static readonly RULE_altAnnotationQualifiedName = 55;
    public static readonly RULE_annotation = 56;
    public static readonly RULE_elementValuePairs = 57;
    public static readonly RULE_elementValuePair = 58;
    public static readonly RULE_elementValue = 59;
    public static readonly RULE_elementValueArrayInitializer = 60;
    public static readonly RULE_annotationTypeDeclaration = 61;
    public static readonly RULE_annotationTypeBody = 62;
    public static readonly RULE_annotationTypeElementDeclaration = 63;
    public static readonly RULE_annotationTypeElementRest = 64;
    public static readonly RULE_annotationMethodOrConstantRest = 65;
    public static readonly RULE_annotationMethodRest = 66;
    public static readonly RULE_annotationConstantRest = 67;
    public static readonly RULE_defaultValue = 68;
    public static readonly RULE_moduleDeclaration = 69;
    public static readonly RULE_moduleBody = 70;
    public static readonly RULE_moduleDirective = 71;
    public static readonly RULE_requiresModifier = 72;
    public static readonly RULE_recordDeclaration = 73;
    public static readonly RULE_recordHeader = 74;
    public static readonly RULE_recordComponentList = 75;
    public static readonly RULE_recordComponent = 76;
    public static readonly RULE_recordBody = 77;
    public static readonly RULE_block = 78;
    public static readonly RULE_blockStatement = 79;
    public static readonly RULE_localVariableDeclaration = 80;
    public static readonly RULE_identifier = 81;
    public static readonly RULE_localTypeDeclaration = 82;
    public static readonly RULE_statement = 83;
    public static readonly RULE_catchClause = 84;
    public static readonly RULE_catchType = 85;
    public static readonly RULE_finallyBlock = 86;
    public static readonly RULE_resourceSpecification = 87;
    public static readonly RULE_resources = 88;
    public static readonly RULE_resource = 89;
    public static readonly RULE_switchBlockStatementGroup = 90;
    public static readonly RULE_switchLabel = 91;
    public static readonly RULE_forControl = 92;
    public static readonly RULE_forInit = 93;
    public static readonly RULE_enhancedForControl = 94;
    public static readonly RULE_parExpression = 95;
    public static readonly RULE_expressionList = 96;
    public static readonly RULE_methodCall = 97;
    public static readonly RULE_expression = 98;
    public static readonly RULE_pattern = 99;
    public static readonly RULE_lambdaExpression = 100;
    public static readonly RULE_lambdaParameters = 101;
    public static readonly RULE_lambdaBody = 102;
    public static readonly RULE_primary = 103;
    public static readonly RULE_switchExpression = 104;
    public static readonly RULE_switchLabeledRule = 105;
    public static readonly RULE_guardedPattern = 106;
    public static readonly RULE_switchRuleOutcome = 107;
    public static readonly RULE_classType = 108;
    public static readonly RULE_creator = 109;
    public static readonly RULE_createdName = 110;
    public static readonly RULE_innerCreator = 111;
    public static readonly RULE_arrayCreatorRest = 112;
    public static readonly RULE_classCreatorRest = 113;
    public static readonly RULE_explicitGenericInvocation = 114;
    public static readonly RULE_typeArgumentsOrDiamond = 115;
    public static readonly RULE_nonWildcardTypeArgumentsOrDiamond = 116;
    public static readonly RULE_nonWildcardTypeArguments = 117;
    public static readonly RULE_typeList = 118;
    public static readonly RULE_typeType = 119;
    public static readonly RULE_primitiveType = 120;
    public static readonly RULE_typeArguments = 121;
    public static readonly RULE_superSuffix = 122;
    public static readonly RULE_explicitGenericInvocationSuffix = 123;
    public static readonly RULE_arguments = 124;

    public static readonly literalNames = [
        null, "'abstract'", "'assert'", "'boolean'", "'break'", "'byte'", 
        "'case'", "'catch'", "'char'", "'class'", "'const'", "'continue'", 
        "'default'", "'do'", "'double'", "'else'", "'enum'", "'extends'", 
        "'final'", "'finally'", "'float'", "'for'", "'if'", "'goto'", "'implements'", 
        "'import'", "'instanceof'", "'int'", "'interface'", "'long'", "'native'", 
        "'new'", "'package'", "'private'", "'protected'", "'public'", "'return'", 
        "'short'", "'static'", "'strictfp'", "'super'", "'switch'", "'synchronized'", 
        "'this'", "'throw'", "'throws'", "'transient'", "'try'", "'void'", 
        "'volatile'", "'while'", "'module'", "'open'", "'requires'", "'exports'", 
        "'opens'", "'to'", "'uses'", "'provides'", "'with'", "'transitive'", 
        "'var'", "'yield'", "'record'", "'sealed'", "'permits'", "'non-sealed'", 
        null, null, null, null, null, null, null, null, null, null, "'null'", 
        "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", "','", "'.'", "'='", 
        "'>'", "'<'", "'!'", "'~'", "'?'", "':'", "'=='", "'<='", "'>='", 
        "'!='", "'&&'", "'||'", "'++'", "'--'", "'+'", "'-'", "'*'", "'/'", 
        "'&'", "'|'", "'^'", "'%'", "'+='", "'-='", "'*='", "'/='", "'&='", 
        "'|='", "'^='", "'%='", "'<<='", "'>>='", "'>>>='", "'->'", "'::'", 
        "'@'", "'...'"
    ];

    public static readonly symbolicNames = [
        null, "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", "BYTE", "CASE", 
        "CATCH", "CHAR", "CLASS", "CONST", "CONTINUE", "DEFAULT", "DO", 
        "DOUBLE", "ELSE", "ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT", 
        "FOR", "IF", "GOTO", "IMPLEMENTS", "IMPORT", "INSTANCEOF", "INT", 
        "INTERFACE", "LONG", "NATIVE", "NEW", "PACKAGE", "PRIVATE", "PROTECTED", 
        "PUBLIC", "RETURN", "SHORT", "STATIC", "STRICTFP", "SUPER", "SWITCH", 
        "SYNCHRONIZED", "THIS", "THROW", "THROWS", "TRANSIENT", "TRY", "VOID", 
        "VOLATILE", "WHILE", "MODULE", "OPEN", "REQUIRES", "EXPORTS", "OPENS", 
        "TO", "USES", "PROVIDES", "WITH", "TRANSITIVE", "VAR", "YIELD", 
        "RECORD", "SEALED", "PERMITS", "NON_SEALED", "DECIMAL_LITERAL", 
        "HEX_LITERAL", "OCT_LITERAL", "BINARY_LITERAL", "FLOAT_LITERAL", 
        "HEX_FLOAT_LITERAL", "BOOL_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", 
        "TEXT_BLOCK", "NULL_LITERAL", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
        "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", "ASSIGN", "GT", "LT", 
        "BANG", "TILDE", "QUESTION", "COLON", "EQUAL", "LE", "GE", "NOTEQUAL", 
        "AND", "OR", "INC", "DEC", "ADD", "SUB", "MUL", "DIV", "BITAND", 
        "BITOR", "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", 
        "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", 
        "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "ARROW", "COLONCOLON", 
        "AT", "ELLIPSIS", "WS", "JSNI_COMMENT", "COMMENT", "LINE_COMMENT", 
        "IDENTIFIER"
    ];
    public static readonly ruleNames = [
        "compilationUnit", "packageDeclaration", "importDeclaration", "typeDeclaration", 
        "modifier", "classOrInterfaceModifier", "variableModifier", "classDeclaration", 
        "typeParameters", "typeParameter", "typeBound", "enumDeclaration", 
        "enumConstants", "enumConstant", "enumBodyDeclarations", "interfaceDeclaration", 
        "classBody", "interfaceBody", "classBodyDeclaration", "memberDeclaration", 
        "methodDeclaration", "jsniMethodDeclaration", "methodBody", "typeTypeOrVoid", 
        "genericMethodDeclaration", "genericConstructorDeclaration", "constructorDeclaration", 
        "fieldDeclaration", "interfaceBodyDeclaration", "interfaceMemberDeclaration", 
        "constDeclaration", "constantDeclarator", "interfaceMethodDeclaration", 
        "interfaceMethodModifier", "genericInterfaceMethodDeclaration", 
        "interfaceCommonBodyDeclaration", "variableDeclarators", "variableDeclarator", 
        "variableDeclaratorId", "variableInitializer", "arrayInitializer", 
        "classOrInterfaceType", "typeArgument", "qualifiedNameList", "formalParameters", 
        "receiverParameter", "formalParameterList", "formalParameter", "lastFormalParameter", 
        "lambdaLVTIList", "lambdaLVTIParameter", "qualifiedName", "literal", 
        "integerLiteral", "floatLiteral", "altAnnotationQualifiedName", 
        "annotation", "elementValuePairs", "elementValuePair", "elementValue", 
        "elementValueArrayInitializer", "annotationTypeDeclaration", "annotationTypeBody", 
        "annotationTypeElementDeclaration", "annotationTypeElementRest", 
        "annotationMethodOrConstantRest", "annotationMethodRest", "annotationConstantRest", 
        "defaultValue", "moduleDeclaration", "moduleBody", "moduleDirective", 
        "requiresModifier", "recordDeclaration", "recordHeader", "recordComponentList", 
        "recordComponent", "recordBody", "block", "blockStatement", "localVariableDeclaration", 
        "identifier", "localTypeDeclaration", "statement", "catchClause", 
        "catchType", "finallyBlock", "resourceSpecification", "resources", 
        "resource", "switchBlockStatementGroup", "switchLabel", "forControl", 
        "forInit", "enhancedForControl", "parExpression", "expressionList", 
        "methodCall", "expression", "pattern", "lambdaExpression", "lambdaParameters", 
        "lambdaBody", "primary", "switchExpression", "switchLabeledRule", 
        "guardedPattern", "switchRuleOutcome", "classType", "creator", "createdName", 
        "innerCreator", "arrayCreatorRest", "classCreatorRest", "explicitGenericInvocation", 
        "typeArgumentsOrDiamond", "nonWildcardTypeArgumentsOrDiamond", "nonWildcardTypeArguments", 
        "typeList", "typeType", "primitiveType", "typeArguments", "superSuffix", 
        "explicitGenericInvocationSuffix", "arguments",
    ];

    public get grammarFileName(): string { return "JavaParser.g4"; }
    public get literalNames(): (string | null)[] { return JavaParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return JavaParser.symbolicNames; }
    public get ruleNames(): string[] { return JavaParser.ruleNames; }
    public get serializedATN(): number[] { return JavaParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, JavaParser._ATN, JavaParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public compilationUnit(): CompilationUnitContext {
        let localContext = new CompilationUnitContext(this.context, this.state);
        this.enterRule(localContext, 0, JavaParser.RULE_compilationUnit);
        let _la: number;
        try {
            this.state = 269;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 251;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
                case 1:
                    {
                    this.state = 250;
                    this.packageDeclaration();
                    }
                    break;
                }
                this.state = 256;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 25) {
                    {
                    {
                    this.state = 253;
                    this.importDeclaration();
                    }
                    }
                    this.state = 258;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 262;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268763650) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294705255) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 524291) !== 0) || _la === 123 || _la === 129) {
                    {
                    {
                    this.state = 259;
                    this.typeDeclaration();
                    }
                    }
                    this.state = 264;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 265;
                this.match(JavaParser.EOF);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 266;
                this.moduleDeclaration();
                this.state = 267;
                this.match(JavaParser.EOF);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public packageDeclaration(): PackageDeclarationContext {
        let localContext = new PackageDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 2, JavaParser.RULE_packageDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 274;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la === 123 || _la === 129) {
                {
                {
                this.state = 271;
                this.annotation();
                }
                }
                this.state = 276;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 277;
            this.match(JavaParser.PACKAGE);
            this.state = 278;
            this.qualifiedName();
            this.state = 279;
            this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public importDeclaration(): ImportDeclarationContext {
        let localContext = new ImportDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 4, JavaParser.RULE_importDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 281;
            this.match(JavaParser.IMPORT);
            this.state = 283;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 38) {
                {
                this.state = 282;
                this.match(JavaParser.STATIC);
                }
            }

            this.state = 285;
            this.qualifiedName();
            this.state = 288;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 86) {
                {
                this.state = 286;
                this.match(JavaParser.DOT);
                this.state = 287;
                this.match(JavaParser.MUL);
                }
            }

            this.state = 290;
            this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeDeclaration(): TypeDeclarationContext {
        let localContext = new TypeDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 6, JavaParser.RULE_typeDeclaration);
        try {
            let alternative: number;
            this.state = 306;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.ABSTRACT:
            case JavaParser.CLASS:
            case JavaParser.ENUM:
            case JavaParser.FINAL:
            case JavaParser.INTERFACE:
            case JavaParser.PRIVATE:
            case JavaParser.PROTECTED:
            case JavaParser.PUBLIC:
            case JavaParser.STATIC:
            case JavaParser.STRICTFP:
            case JavaParser.MODULE:
            case JavaParser.OPEN:
            case JavaParser.REQUIRES:
            case JavaParser.EXPORTS:
            case JavaParser.OPENS:
            case JavaParser.TO:
            case JavaParser.USES:
            case JavaParser.PROVIDES:
            case JavaParser.WITH:
            case JavaParser.TRANSITIVE:
            case JavaParser.VAR:
            case JavaParser.YIELD:
            case JavaParser.RECORD:
            case JavaParser.SEALED:
            case JavaParser.PERMITS:
            case JavaParser.NON_SEALED:
            case JavaParser.AT:
            case JavaParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 295;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 292;
                        this.classOrInterfaceModifier();
                        }
                        }
                    }
                    this.state = 297;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
                }
                this.state = 303;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case JavaParser.CLASS:
                    {
                    this.state = 298;
                    this.classDeclaration();
                    }
                    break;
                case JavaParser.ENUM:
                    {
                    this.state = 299;
                    this.enumDeclaration();
                    }
                    break;
                case JavaParser.INTERFACE:
                    {
                    this.state = 300;
                    this.interfaceDeclaration();
                    }
                    break;
                case JavaParser.AT:
                    {
                    this.state = 301;
                    this.annotationTypeDeclaration();
                    }
                    break;
                case JavaParser.RECORD:
                    {
                    this.state = 302;
                    this.recordDeclaration();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case JavaParser.SEMI:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 305;
                this.match(JavaParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public modifier(): ModifierContext {
        let localContext = new ModifierContext(this.context, this.state);
        this.enterRule(localContext, 8, JavaParser.RULE_modifier);
        try {
            this.state = 313;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.ABSTRACT:
            case JavaParser.FINAL:
            case JavaParser.PRIVATE:
            case JavaParser.PROTECTED:
            case JavaParser.PUBLIC:
            case JavaParser.STATIC:
            case JavaParser.STRICTFP:
            case JavaParser.MODULE:
            case JavaParser.OPEN:
            case JavaParser.REQUIRES:
            case JavaParser.EXPORTS:
            case JavaParser.OPENS:
            case JavaParser.TO:
            case JavaParser.USES:
            case JavaParser.PROVIDES:
            case JavaParser.WITH:
            case JavaParser.TRANSITIVE:
            case JavaParser.VAR:
            case JavaParser.YIELD:
            case JavaParser.RECORD:
            case JavaParser.SEALED:
            case JavaParser.PERMITS:
            case JavaParser.NON_SEALED:
            case JavaParser.AT:
            case JavaParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 308;
                this.classOrInterfaceModifier();
                }
                break;
            case JavaParser.NATIVE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 309;
                this.match(JavaParser.NATIVE);
                }
                break;
            case JavaParser.SYNCHRONIZED:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 310;
                this.match(JavaParser.SYNCHRONIZED);
                }
                break;
            case JavaParser.TRANSIENT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 311;
                this.match(JavaParser.TRANSIENT);
                }
                break;
            case JavaParser.VOLATILE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 312;
                this.match(JavaParser.VOLATILE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
        let localContext = new ClassOrInterfaceModifierContext(this.context, this.state);
        this.enterRule(localContext, 10, JavaParser.RULE_classOrInterfaceModifier);
        try {
            this.state = 325;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 315;
                this.annotation();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 316;
                this.match(JavaParser.PUBLIC);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 317;
                this.match(JavaParser.PROTECTED);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 318;
                this.match(JavaParser.PRIVATE);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 319;
                this.match(JavaParser.STATIC);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 320;
                this.match(JavaParser.ABSTRACT);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 321;
                this.match(JavaParser.FINAL);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 322;
                this.match(JavaParser.STRICTFP);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 323;
                this.match(JavaParser.SEALED);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 324;
                this.match(JavaParser.NON_SEALED);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableModifier(): VariableModifierContext {
        let localContext = new VariableModifierContext(this.context, this.state);
        this.enterRule(localContext, 12, JavaParser.RULE_variableModifier);
        try {
            this.state = 329;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.FINAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 327;
                this.match(JavaParser.FINAL);
                }
                break;
            case JavaParser.MODULE:
            case JavaParser.OPEN:
            case JavaParser.REQUIRES:
            case JavaParser.EXPORTS:
            case JavaParser.OPENS:
            case JavaParser.TO:
            case JavaParser.USES:
            case JavaParser.PROVIDES:
            case JavaParser.WITH:
            case JavaParser.TRANSITIVE:
            case JavaParser.VAR:
            case JavaParser.YIELD:
            case JavaParser.RECORD:
            case JavaParser.SEALED:
            case JavaParser.PERMITS:
            case JavaParser.AT:
            case JavaParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 328;
                this.annotation();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classDeclaration(): ClassDeclarationContext {
        let localContext = new ClassDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 14, JavaParser.RULE_classDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 331;
            this.match(JavaParser.CLASS);
            this.state = 332;
            this.identifier();
            this.state = 334;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 89) {
                {
                this.state = 333;
                this.typeParameters();
                }
            }

            this.state = 338;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 336;
                this.match(JavaParser.EXTENDS);
                this.state = 337;
                this.typeType();
                }
            }

            this.state = 342;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 24) {
                {
                this.state = 340;
                this.match(JavaParser.IMPLEMENTS);
                this.state = 341;
                this.typeList();
                }
            }

            this.state = 346;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 65) {
                {
                this.state = 344;
                this.match(JavaParser.PERMITS);
                this.state = 345;
                this.typeList();
                }
            }

            this.state = 348;
            this.classBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeParameters(): TypeParametersContext {
        let localContext = new TypeParametersContext(this.context, this.state);
        this.enterRule(localContext, 16, JavaParser.RULE_typeParameters);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 350;
            this.match(JavaParser.LT);
            this.state = 351;
            this.typeParameter();
            this.state = 356;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 85) {
                {
                {
                this.state = 352;
                this.match(JavaParser.COMMA);
                this.state = 353;
                this.typeParameter();
                }
                }
                this.state = 358;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 359;
            this.match(JavaParser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeParameter(): TypeParameterContext {
        let localContext = new TypeParameterContext(this.context, this.state);
        this.enterRule(localContext, 18, JavaParser.RULE_typeParameter);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 364;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 361;
                    this.annotation();
                    }
                    }
                }
                this.state = 366;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
            }
            this.state = 367;
            this.identifier();
            this.state = 376;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 368;
                this.match(JavaParser.EXTENDS);
                this.state = 372;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 369;
                        this.annotation();
                        }
                        }
                    }
                    this.state = 374;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
                }
                this.state = 375;
                this.typeBound();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeBound(): TypeBoundContext {
        let localContext = new TypeBoundContext(this.context, this.state);
        this.enterRule(localContext, 20, JavaParser.RULE_typeBound);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 378;
            this.typeType();
            this.state = 383;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 106) {
                {
                {
                this.state = 379;
                this.match(JavaParser.BITAND);
                this.state = 380;
                this.typeType();
                }
                }
                this.state = 385;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumDeclaration(): EnumDeclarationContext {
        let localContext = new EnumDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 22, JavaParser.RULE_enumDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 386;
            this.match(JavaParser.ENUM);
            this.state = 387;
            this.identifier();
            this.state = 390;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 24) {
                {
                this.state = 388;
                this.match(JavaParser.IMPLEMENTS);
                this.state = 389;
                this.typeList();
                }
            }

            this.state = 392;
            this.match(JavaParser.LBRACE);
            this.state = 394;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la === 123 || _la === 129) {
                {
                this.state = 393;
                this.enumConstants();
                }
            }

            this.state = 397;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 85) {
                {
                this.state = 396;
                this.match(JavaParser.COMMA);
                }
            }

            this.state = 400;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 84) {
                {
                this.state = 399;
                this.enumBodyDeclarations();
                }
            }

            this.state = 402;
            this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumConstants(): EnumConstantsContext {
        let localContext = new EnumConstantsContext(this.context, this.state);
        this.enterRule(localContext, 24, JavaParser.RULE_enumConstants);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 404;
            this.enumConstant();
            this.state = 409;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 26, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 405;
                    this.match(JavaParser.COMMA);
                    this.state = 406;
                    this.enumConstant();
                    }
                    }
                }
                this.state = 411;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 26, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumConstant(): EnumConstantContext {
        let localContext = new EnumConstantContext(this.context, this.state);
        this.enterRule(localContext, 26, JavaParser.RULE_enumConstant);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 415;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 27, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 412;
                    this.annotation();
                    }
                    }
                }
                this.state = 417;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 27, this.context);
            }
            this.state = 418;
            this.identifier();
            this.state = 420;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 78) {
                {
                this.state = 419;
                this.arguments();
                }
            }

            this.state = 423;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 80) {
                {
                this.state = 422;
                this.classBody();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumBodyDeclarations(): EnumBodyDeclarationsContext {
        let localContext = new EnumBodyDeclarationsContext(this.context, this.state);
        this.enterRule(localContext, 28, JavaParser.RULE_enumBodyDeclarations);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 425;
            this.match(JavaParser.SEMI);
            this.state = 429;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014659370) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294812279) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 17334275) !== 0) || _la === 123 || _la === 129) {
                {
                {
                this.state = 426;
                this.classBodyDeclaration();
                }
                }
                this.state = 431;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceDeclaration(): InterfaceDeclarationContext {
        let localContext = new InterfaceDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 30, JavaParser.RULE_interfaceDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 432;
            this.match(JavaParser.INTERFACE);
            this.state = 433;
            this.identifier();
            this.state = 435;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 89) {
                {
                this.state = 434;
                this.typeParameters();
                }
            }

            this.state = 439;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 437;
                this.match(JavaParser.EXTENDS);
                this.state = 438;
                this.typeList();
                }
            }

            this.state = 441;
            this.interfaceBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classBody(): ClassBodyContext {
        let localContext = new ClassBodyContext(this.context, this.state);
        this.enterRule(localContext, 32, JavaParser.RULE_classBody);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 443;
            this.match(JavaParser.LBRACE);
            this.state = 447;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014659370) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294812279) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 17334275) !== 0) || _la === 123 || _la === 129) {
                {
                {
                this.state = 444;
                this.classBodyDeclaration();
                }
                }
                this.state = 449;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 450;
            this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceBody(): InterfaceBodyContext {
        let localContext = new InterfaceBodyContext(this.context, this.state);
        this.enterRule(localContext, 34, JavaParser.RULE_interfaceBody);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 452;
            this.match(JavaParser.LBRACE);
            this.state = 456;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014663466) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294812279) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 17301507) !== 0) || _la === 123 || _la === 129) {
                {
                {
                this.state = 453;
                this.interfaceBodyDeclaration();
                }
                }
                this.state = 458;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 459;
            this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classBodyDeclaration(): ClassBodyDeclarationContext {
        let localContext = new ClassBodyDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 36, JavaParser.RULE_classBodyDeclaration);
        let _la: number;
        try {
            let alternative: number;
            this.state = 473;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 37, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 461;
                this.match(JavaParser.SEMI);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 463;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 38) {
                    {
                    this.state = 462;
                    this.match(JavaParser.STATIC);
                    }
                }

                this.state = 465;
                this.block();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 469;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 36, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 466;
                        this.modifier();
                        }
                        }
                    }
                    this.state = 471;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 36, this.context);
                }
                this.state = 472;
                this.memberDeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public memberDeclaration(): MemberDeclarationContext {
        let localContext = new MemberDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 38, JavaParser.RULE_memberDeclaration);
        try {
            this.state = 486;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 475;
                this.methodDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 476;
                this.genericMethodDeclaration();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 477;
                this.fieldDeclaration();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 478;
                this.constructorDeclaration();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 479;
                this.genericConstructorDeclaration();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 480;
                this.interfaceDeclaration();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 481;
                this.annotationTypeDeclaration();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 482;
                this.classDeclaration();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 483;
                this.enumDeclaration();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 484;
                this.recordDeclaration();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 485;
                this.jsniMethodDeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public methodDeclaration(): MethodDeclarationContext {
        let localContext = new MethodDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 40, JavaParser.RULE_methodDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 488;
            this.typeTypeOrVoid();
            this.state = 489;
            this.identifier();
            this.state = 490;
            this.formalParameters();
            this.state = 495;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 82) {
                {
                {
                this.state = 491;
                this.match(JavaParser.LBRACK);
                this.state = 492;
                this.match(JavaParser.RBRACK);
                }
                }
                this.state = 497;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 500;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 498;
                this.match(JavaParser.THROWS);
                this.state = 499;
                this.qualifiedNameList();
                }
            }

            this.state = 502;
            this.methodBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public jsniMethodDeclaration(): JsniMethodDeclarationContext {
        let localContext = new JsniMethodDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 42, JavaParser.RULE_jsniMethodDeclaration);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 507;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 41, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 504;
                    this.modifier();
                    }
                    }
                }
                this.state = 509;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 41, this.context);
            }
            this.state = 510;
            this.typeTypeOrVoid();
            this.state = 511;
            this.identifier();
            this.state = 512;
            this.formalParameters();
            this.state = 517;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 82) {
                {
                {
                this.state = 513;
                this.match(JavaParser.LBRACK);
                this.state = 514;
                this.match(JavaParser.RBRACK);
                }
                }
                this.state = 519;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 522;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 520;
                this.match(JavaParser.THROWS);
                this.state = 521;
                this.qualifiedNameList();
                }
            }

            this.state = 524;
            this.match(JavaParser.JSNI_COMMENT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public methodBody(): MethodBodyContext {
        let localContext = new MethodBodyContext(this.context, this.state);
        this.enterRule(localContext, 44, JavaParser.RULE_methodBody);
        try {
            this.state = 529;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.LBRACE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 526;
                this.block();
                }
                break;
            case JavaParser.JSNI_COMMENT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 527;
                this.match(JavaParser.JSNI_COMMENT);
                }
                break;
            case JavaParser.SEMI:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 528;
                this.match(JavaParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeTypeOrVoid(): TypeTypeOrVoidContext {
        let localContext = new TypeTypeOrVoidContext(this.context, this.state);
        this.enterRule(localContext, 46, JavaParser.RULE_typeTypeOrVoid);
        try {
            this.state = 533;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.DOUBLE:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.LONG:
            case JavaParser.SHORT:
            case JavaParser.MODULE:
            case JavaParser.OPEN:
            case JavaParser.REQUIRES:
            case JavaParser.EXPORTS:
            case JavaParser.OPENS:
            case JavaParser.TO:
            case JavaParser.USES:
            case JavaParser.PROVIDES:
            case JavaParser.WITH:
            case JavaParser.TRANSITIVE:
            case JavaParser.VAR:
            case JavaParser.YIELD:
            case JavaParser.RECORD:
            case JavaParser.SEALED:
            case JavaParser.PERMITS:
            case JavaParser.AT:
            case JavaParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 531;
                this.typeType();
                }
                break;
            case JavaParser.VOID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 532;
                this.match(JavaParser.VOID);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericMethodDeclaration(): GenericMethodDeclarationContext {
        let localContext = new GenericMethodDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 48, JavaParser.RULE_genericMethodDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 535;
            this.typeParameters();
            this.state = 536;
            this.methodDeclaration();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericConstructorDeclaration(): GenericConstructorDeclarationContext {
        let localContext = new GenericConstructorDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 50, JavaParser.RULE_genericConstructorDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 538;
            this.typeParameters();
            this.state = 539;
            this.constructorDeclaration();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constructorDeclaration(): ConstructorDeclarationContext {
        let localContext = new ConstructorDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 52, JavaParser.RULE_constructorDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 541;
            this.identifier();
            this.state = 542;
            this.formalParameters();
            this.state = 545;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 543;
                this.match(JavaParser.THROWS);
                this.state = 544;
                this.qualifiedNameList();
                }
            }

            this.state = 547;
            localContext._constructorBody = this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fieldDeclaration(): FieldDeclarationContext {
        let localContext = new FieldDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 54, JavaParser.RULE_fieldDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 549;
            this.typeType();
            this.state = 550;
            this.variableDeclarators();
            this.state = 551;
            this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext {
        let localContext = new InterfaceBodyDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 56, JavaParser.RULE_interfaceBodyDeclaration);
        try {
            let alternative: number;
            this.state = 561;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.ABSTRACT:
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.CLASS:
            case JavaParser.DEFAULT:
            case JavaParser.DOUBLE:
            case JavaParser.ENUM:
            case JavaParser.FINAL:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.INTERFACE:
            case JavaParser.LONG:
            case JavaParser.NATIVE:
            case JavaParser.PRIVATE:
            case JavaParser.PROTECTED:
            case JavaParser.PUBLIC:
            case JavaParser.SHORT:
            case JavaParser.STATIC:
            case JavaParser.STRICTFP:
            case JavaParser.SYNCHRONIZED:
            case JavaParser.TRANSIENT:
            case JavaParser.VOID:
            case JavaParser.VOLATILE:
            case JavaParser.MODULE:
            case JavaParser.OPEN:
            case JavaParser.REQUIRES:
            case JavaParser.EXPORTS:
            case JavaParser.OPENS:
            case JavaParser.TO:
            case JavaParser.USES:
            case JavaParser.PROVIDES:
            case JavaParser.WITH:
            case JavaParser.TRANSITIVE:
            case JavaParser.VAR:
            case JavaParser.YIELD:
            case JavaParser.RECORD:
            case JavaParser.SEALED:
            case JavaParser.PERMITS:
            case JavaParser.NON_SEALED:
            case JavaParser.LT:
            case JavaParser.AT:
            case JavaParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 556;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 47, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 553;
                        this.modifier();
                        }
                        }
                    }
                    this.state = 558;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 47, this.context);
                }
                this.state = 559;
                this.interfaceMemberDeclaration();
                }
                break;
            case JavaParser.SEMI:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 560;
                this.match(JavaParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
        let localContext = new InterfaceMemberDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 58, JavaParser.RULE_interfaceMemberDeclaration);
        try {
            this.state = 571;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 49, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 563;
                this.constDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 564;
                this.interfaceMethodDeclaration();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 565;
                this.genericInterfaceMethodDeclaration();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 566;
                this.interfaceDeclaration();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 567;
                this.annotationTypeDeclaration();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 568;
                this.classDeclaration();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 569;
                this.enumDeclaration();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 570;
                this.recordDeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constDeclaration(): ConstDeclarationContext {
        let localContext = new ConstDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 60, JavaParser.RULE_constDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 573;
            this.typeType();
            this.state = 574;
            this.constantDeclarator();
            this.state = 579;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 85) {
                {
                {
                this.state = 575;
                this.match(JavaParser.COMMA);
                this.state = 576;
                this.constantDeclarator();
                }
                }
                this.state = 581;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 582;
            this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constantDeclarator(): ConstantDeclaratorContext {
        let localContext = new ConstantDeclaratorContext(this.context, this.state);
        this.enterRule(localContext, 62, JavaParser.RULE_constantDeclarator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 584;
            this.identifier();
            this.state = 589;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 82) {
                {
                {
                this.state = 585;
                this.match(JavaParser.LBRACK);
                this.state = 586;
                this.match(JavaParser.RBRACK);
                }
                }
                this.state = 591;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 592;
            this.match(JavaParser.ASSIGN);
            this.state = 593;
            this.variableInitializer();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
        let localContext = new InterfaceMethodDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 64, JavaParser.RULE_interfaceMethodDeclaration);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 598;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 52, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 595;
                    this.interfaceMethodModifier();
                    }
                    }
                }
                this.state = 600;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 52, this.context);
            }
            this.state = 601;
            this.interfaceCommonBodyDeclaration();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceMethodModifier(): InterfaceMethodModifierContext {
        let localContext = new InterfaceMethodModifierContext(this.context, this.state);
        this.enterRule(localContext, 66, JavaParser.RULE_interfaceMethodModifier);
        try {
            this.state = 609;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.MODULE:
            case JavaParser.OPEN:
            case JavaParser.REQUIRES:
            case JavaParser.EXPORTS:
            case JavaParser.OPENS:
            case JavaParser.TO:
            case JavaParser.USES:
            case JavaParser.PROVIDES:
            case JavaParser.WITH:
            case JavaParser.TRANSITIVE:
            case JavaParser.VAR:
            case JavaParser.YIELD:
            case JavaParser.RECORD:
            case JavaParser.SEALED:
            case JavaParser.PERMITS:
            case JavaParser.AT:
            case JavaParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 603;
                this.annotation();
                }
                break;
            case JavaParser.PUBLIC:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 604;
                this.match(JavaParser.PUBLIC);
                }
                break;
            case JavaParser.ABSTRACT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 605;
                this.match(JavaParser.ABSTRACT);
                }
                break;
            case JavaParser.DEFAULT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 606;
                this.match(JavaParser.DEFAULT);
                }
                break;
            case JavaParser.STATIC:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 607;
                this.match(JavaParser.STATIC);
                }
                break;
            case JavaParser.STRICTFP:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 608;
                this.match(JavaParser.STRICTFP);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext {
        let localContext = new GenericInterfaceMethodDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 68, JavaParser.RULE_genericInterfaceMethodDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 614;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1 || _la === 12 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2147418137) !== 0) || _la === 123 || _la === 129) {
                {
                {
                this.state = 611;
                this.interfaceMethodModifier();
                }
                }
                this.state = 616;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 617;
            this.typeParameters();
            this.state = 618;
            this.interfaceCommonBodyDeclaration();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceCommonBodyDeclaration(): InterfaceCommonBodyDeclarationContext {
        let localContext = new InterfaceCommonBodyDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 70, JavaParser.RULE_interfaceCommonBodyDeclaration);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 623;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 55, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 620;
                    this.annotation();
                    }
                    }
                }
                this.state = 625;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 55, this.context);
            }
            this.state = 626;
            this.typeTypeOrVoid();
            this.state = 627;
            this.identifier();
            this.state = 628;
            this.formalParameters();
            this.state = 633;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 82) {
                {
                {
                this.state = 629;
                this.match(JavaParser.LBRACK);
                this.state = 630;
                this.match(JavaParser.RBRACK);
                }
                }
                this.state = 635;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 638;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 636;
                this.match(JavaParser.THROWS);
                this.state = 637;
                this.qualifiedNameList();
                }
            }

            this.state = 640;
            this.methodBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclarators(): VariableDeclaratorsContext {
        let localContext = new VariableDeclaratorsContext(this.context, this.state);
        this.enterRule(localContext, 72, JavaParser.RULE_variableDeclarators);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 642;
            this.variableDeclarator();
            this.state = 647;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 85) {
                {
                {
                this.state = 643;
                this.match(JavaParser.COMMA);
                this.state = 644;
                this.variableDeclarator();
                }
                }
                this.state = 649;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclarator(): VariableDeclaratorContext {
        let localContext = new VariableDeclaratorContext(this.context, this.state);
        this.enterRule(localContext, 74, JavaParser.RULE_variableDeclarator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 650;
            this.variableDeclaratorId();
            this.state = 653;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 87) {
                {
                this.state = 651;
                this.match(JavaParser.ASSIGN);
                this.state = 652;
                this.variableInitializer();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclaratorId(): VariableDeclaratorIdContext {
        let localContext = new VariableDeclaratorIdContext(this.context, this.state);
        this.enterRule(localContext, 76, JavaParser.RULE_variableDeclaratorId);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 655;
            this.identifier();
            this.state = 660;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 82) {
                {
                {
                this.state = 656;
                this.match(JavaParser.LBRACK);
                this.state = 657;
                this.match(JavaParser.RBRACK);
                }
                }
                this.state = 662;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableInitializer(): VariableInitializerContext {
        let localContext = new VariableInitializerContext(this.context, this.state);
        this.enterRule(localContext, 78, JavaParser.RULE_variableInitializer);
        try {
            this.state = 665;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.LBRACE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 663;
                this.arrayInitializer();
                }
                break;
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.DOUBLE:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.LONG:
            case JavaParser.NEW:
            case JavaParser.SHORT:
            case JavaParser.SUPER:
            case JavaParser.SWITCH:
            case JavaParser.THIS:
            case JavaParser.VOID:
            case JavaParser.MODULE:
            case JavaParser.OPEN:
            case JavaParser.REQUIRES:
            case JavaParser.EXPORTS:
            case JavaParser.OPENS:
            case JavaParser.TO:
            case JavaParser.USES:
            case JavaParser.PROVIDES:
            case JavaParser.WITH:
            case JavaParser.TRANSITIVE:
            case JavaParser.VAR:
            case JavaParser.YIELD:
            case JavaParser.RECORD:
            case JavaParser.SEALED:
            case JavaParser.PERMITS:
            case JavaParser.DECIMAL_LITERAL:
            case JavaParser.HEX_LITERAL:
            case JavaParser.OCT_LITERAL:
            case JavaParser.BINARY_LITERAL:
            case JavaParser.FLOAT_LITERAL:
            case JavaParser.HEX_FLOAT_LITERAL:
            case JavaParser.BOOL_LITERAL:
            case JavaParser.CHAR_LITERAL:
            case JavaParser.STRING_LITERAL:
            case JavaParser.TEXT_BLOCK:
            case JavaParser.NULL_LITERAL:
            case JavaParser.LPAREN:
            case JavaParser.LT:
            case JavaParser.BANG:
            case JavaParser.TILDE:
            case JavaParser.INC:
            case JavaParser.DEC:
            case JavaParser.ADD:
            case JavaParser.SUB:
            case JavaParser.AT:
            case JavaParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 664;
                this.expression(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayInitializer(): ArrayInitializerContext {
        let localContext = new ArrayInitializerContext(this.context, this.state);
        this.enterRule(localContext, 80, JavaParser.RULE_arrayInitializer);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 667;
            this.match(JavaParser.LBRACE);
            this.state = 679;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 3758082137) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2154826751) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 272629767) !== 0)) {
                {
                this.state = 668;
                this.variableInitializer();
                this.state = 673;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 62, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 669;
                        this.match(JavaParser.COMMA);
                        this.state = 670;
                        this.variableInitializer();
                        }
                        }
                    }
                    this.state = 675;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 62, this.context);
                }
                this.state = 677;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 85) {
                    {
                    this.state = 676;
                    this.match(JavaParser.COMMA);
                    }
                }

                }
            }

            this.state = 681;
            this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classOrInterfaceType(): ClassOrInterfaceTypeContext {
        let localContext = new ClassOrInterfaceTypeContext(this.context, this.state);
        this.enterRule(localContext, 82, JavaParser.RULE_classOrInterfaceType);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 683;
            this.identifier();
            this.state = 685;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 65, this.context) ) {
            case 1:
                {
                this.state = 684;
                this.typeArguments();
                }
                break;
            }
            this.state = 694;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 67, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 687;
                    this.match(JavaParser.DOT);
                    this.state = 688;
                    this.identifier();
                    this.state = 690;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 66, this.context) ) {
                    case 1:
                        {
                        this.state = 689;
                        this.typeArguments();
                        }
                        break;
                    }
                    }
                    }
                }
                this.state = 696;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 67, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeArgument(): TypeArgumentContext {
        let localContext = new TypeArgumentContext(this.context, this.state);
        this.enterRule(localContext, 84, JavaParser.RULE_typeArgument);
        let _la: number;
        try {
            this.state = 709;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 70, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 697;
                this.typeType();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 701;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la === 123 || _la === 129) {
                    {
                    {
                    this.state = 698;
                    this.annotation();
                    }
                    }
                    this.state = 703;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 704;
                this.match(JavaParser.QUESTION);
                this.state = 707;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17 || _la === 40) {
                    {
                    this.state = 705;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 17 || _la === 40)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 706;
                    this.typeType();
                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedNameList(): QualifiedNameListContext {
        let localContext = new QualifiedNameListContext(this.context, this.state);
        this.enterRule(localContext, 86, JavaParser.RULE_qualifiedNameList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 711;
            this.qualifiedName();
            this.state = 716;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 85) {
                {
                {
                this.state = 712;
                this.match(JavaParser.COMMA);
                this.state = 713;
                this.qualifiedName();
                }
                }
                this.state = 718;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public formalParameters(): FormalParametersContext {
        let localContext = new FormalParametersContext(this.context, this.state);
        this.enterRule(localContext, 88, JavaParser.RULE_formalParameters);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 719;
            this.match(JavaParser.LPAREN);
            this.state = 731;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context) ) {
            case 1:
                {
                this.state = 721;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 672153896) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 536854529) !== 0) || _la === 123 || _la === 129) {
                    {
                    this.state = 720;
                    this.receiverParameter();
                    }
                }

                }
                break;
            case 2:
                {
                this.state = 723;
                this.receiverParameter();
                this.state = 726;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 85) {
                    {
                    this.state = 724;
                    this.match(JavaParser.COMMA);
                    this.state = 725;
                    this.formalParameterList();
                    }
                }

                }
                break;
            case 3:
                {
                this.state = 729;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 672416040) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 536854529) !== 0) || _la === 123 || _la === 129) {
                    {
                    this.state = 728;
                    this.formalParameterList();
                    }
                }

                }
                break;
            }
            this.state = 733;
            this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public receiverParameter(): ReceiverParameterContext {
        let localContext = new ReceiverParameterContext(this.context, this.state);
        this.enterRule(localContext, 90, JavaParser.RULE_receiverParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 735;
            this.typeType();
            this.state = 741;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la === 129) {
                {
                {
                this.state = 736;
                this.identifier();
                this.state = 737;
                this.match(JavaParser.DOT);
                }
                }
                this.state = 743;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 744;
            this.match(JavaParser.THIS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public formalParameterList(): FormalParameterListContext {
        let localContext = new FormalParameterListContext(this.context, this.state);
        this.enterRule(localContext, 92, JavaParser.RULE_formalParameterList);
        let _la: number;
        try {
            let alternative: number;
            this.state = 759;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 79, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 746;
                this.formalParameter();
                this.state = 751;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 77, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 747;
                        this.match(JavaParser.COMMA);
                        this.state = 748;
                        this.formalParameter();
                        }
                        }
                    }
                    this.state = 753;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 77, this.context);
                }
                this.state = 756;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 85) {
                    {
                    this.state = 754;
                    this.match(JavaParser.COMMA);
                    this.state = 755;
                    this.lastFormalParameter();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 758;
                this.lastFormalParameter();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public formalParameter(): FormalParameterContext {
        let localContext = new FormalParameterContext(this.context, this.state);
        this.enterRule(localContext, 94, JavaParser.RULE_formalParameter);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 764;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 80, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 761;
                    this.variableModifier();
                    }
                    }
                }
                this.state = 766;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 80, this.context);
            }
            this.state = 767;
            this.typeType();
            this.state = 768;
            this.variableDeclaratorId();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lastFormalParameter(): LastFormalParameterContext {
        let localContext = new LastFormalParameterContext(this.context, this.state);
        this.enterRule(localContext, 96, JavaParser.RULE_lastFormalParameter);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 773;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 81, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 770;
                    this.variableModifier();
                    }
                    }
                }
                this.state = 775;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 81, this.context);
            }
            this.state = 776;
            this.typeType();
            this.state = 780;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la === 123 || _la === 129) {
                {
                {
                this.state = 777;
                this.annotation();
                }
                }
                this.state = 782;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 783;
            this.match(JavaParser.ELLIPSIS);
            this.state = 784;
            this.variableDeclaratorId();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lambdaLVTIList(): LambdaLVTIListContext {
        let localContext = new LambdaLVTIListContext(this.context, this.state);
        this.enterRule(localContext, 98, JavaParser.RULE_lambdaLVTIList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 786;
            this.lambdaLVTIParameter();
            this.state = 791;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 85) {
                {
                {
                this.state = 787;
                this.match(JavaParser.COMMA);
                this.state = 788;
                this.lambdaLVTIParameter();
                }
                }
                this.state = 793;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lambdaLVTIParameter(): LambdaLVTIParameterContext {
        let localContext = new LambdaLVTIParameterContext(this.context, this.state);
        this.enterRule(localContext, 100, JavaParser.RULE_lambdaLVTIParameter);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 797;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 84, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 794;
                    this.variableModifier();
                    }
                    }
                }
                this.state = 799;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 84, this.context);
            }
            this.state = 800;
            this.match(JavaParser.VAR);
            this.state = 801;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedName(): QualifiedNameContext {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 102, JavaParser.RULE_qualifiedName);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 803;
            this.identifier();
            this.state = 808;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 85, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 804;
                    this.match(JavaParser.DOT);
                    this.state = 805;
                    this.identifier();
                    }
                    }
                }
                this.state = 810;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 85, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 104, JavaParser.RULE_literal);
        try {
            this.state = 818;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.DECIMAL_LITERAL:
            case JavaParser.HEX_LITERAL:
            case JavaParser.OCT_LITERAL:
            case JavaParser.BINARY_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 811;
                this.integerLiteral();
                }
                break;
            case JavaParser.FLOAT_LITERAL:
            case JavaParser.HEX_FLOAT_LITERAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 812;
                this.floatLiteral();
                }
                break;
            case JavaParser.CHAR_LITERAL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 813;
                this.match(JavaParser.CHAR_LITERAL);
                }
                break;
            case JavaParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 814;
                this.match(JavaParser.STRING_LITERAL);
                }
                break;
            case JavaParser.BOOL_LITERAL:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 815;
                this.match(JavaParser.BOOL_LITERAL);
                }
                break;
            case JavaParser.NULL_LITERAL:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 816;
                this.match(JavaParser.NULL_LITERAL);
                }
                break;
            case JavaParser.TEXT_BLOCK:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 817;
                this.match(JavaParser.TEXT_BLOCK);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public integerLiteral(): IntegerLiteralContext {
        let localContext = new IntegerLiteralContext(this.context, this.state);
        this.enterRule(localContext, 106, JavaParser.RULE_integerLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 820;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 15) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public floatLiteral(): FloatLiteralContext {
        let localContext = new FloatLiteralContext(this.context, this.state);
        this.enterRule(localContext, 108, JavaParser.RULE_floatLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 822;
            _la = this.tokenStream.LA(1);
            if(!(_la === 71 || _la === 72)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public altAnnotationQualifiedName(): AltAnnotationQualifiedNameContext {
        let localContext = new AltAnnotationQualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 110, JavaParser.RULE_altAnnotationQualifiedName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 829;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la === 129) {
                {
                {
                this.state = 824;
                this.identifier();
                this.state = 825;
                this.match(JavaParser.DOT);
                }
                }
                this.state = 831;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 832;
            this.match(JavaParser.AT);
            this.state = 833;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotation(): AnnotationContext {
        let localContext = new AnnotationContext(this.context, this.state);
        this.enterRule(localContext, 112, JavaParser.RULE_annotation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 838;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 88, this.context) ) {
            case 1:
                {
                this.state = 835;
                this.match(JavaParser.AT);
                this.state = 836;
                this.qualifiedName();
                }
                break;
            case 2:
                {
                this.state = 837;
                this.altAnnotationQualifiedName();
                }
                break;
            }
            this.state = 846;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 78) {
                {
                this.state = 840;
                this.match(JavaParser.LPAREN);
                this.state = 843;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 89, this.context) ) {
                case 1:
                    {
                    this.state = 841;
                    this.elementValuePairs();
                    }
                    break;
                case 2:
                    {
                    this.state = 842;
                    this.elementValue();
                    }
                    break;
                }
                this.state = 845;
                this.match(JavaParser.RPAREN);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elementValuePairs(): ElementValuePairsContext {
        let localContext = new ElementValuePairsContext(this.context, this.state);
        this.enterRule(localContext, 114, JavaParser.RULE_elementValuePairs);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 848;
            this.elementValuePair();
            this.state = 853;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 85) {
                {
                {
                this.state = 849;
                this.match(JavaParser.COMMA);
                this.state = 850;
                this.elementValuePair();
                }
                }
                this.state = 855;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elementValuePair(): ElementValuePairContext {
        let localContext = new ElementValuePairContext(this.context, this.state);
        this.enterRule(localContext, 116, JavaParser.RULE_elementValuePair);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 856;
            this.identifier();
            this.state = 857;
            this.match(JavaParser.ASSIGN);
            this.state = 858;
            this.elementValue();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elementValue(): ElementValueContext {
        let localContext = new ElementValueContext(this.context, this.state);
        this.enterRule(localContext, 118, JavaParser.RULE_elementValue);
        try {
            this.state = 863;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 92, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 860;
                this.expression(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 861;
                this.annotation();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 862;
                this.elementValueArrayInitializer();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
        let localContext = new ElementValueArrayInitializerContext(this.context, this.state);
        this.enterRule(localContext, 120, JavaParser.RULE_elementValueArrayInitializer);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 865;
            this.match(JavaParser.LBRACE);
            this.state = 874;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 3758082137) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2154826751) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 272629767) !== 0)) {
                {
                this.state = 866;
                this.elementValue();
                this.state = 871;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 93, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 867;
                        this.match(JavaParser.COMMA);
                        this.state = 868;
                        this.elementValue();
                        }
                        }
                    }
                    this.state = 873;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 93, this.context);
                }
                }
            }

            this.state = 877;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 85) {
                {
                this.state = 876;
                this.match(JavaParser.COMMA);
                }
            }

            this.state = 879;
            this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
        let localContext = new AnnotationTypeDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 122, JavaParser.RULE_annotationTypeDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 881;
            this.match(JavaParser.AT);
            this.state = 882;
            this.match(JavaParser.INTERFACE);
            this.state = 883;
            this.identifier();
            this.state = 884;
            this.annotationTypeBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotationTypeBody(): AnnotationTypeBodyContext {
        let localContext = new AnnotationTypeBodyContext(this.context, this.state);
        this.enterRule(localContext, 124, JavaParser.RULE_annotationTypeBody);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 886;
            this.match(JavaParser.LBRACE);
            this.state = 890;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014659370) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294779511) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 524291) !== 0) || _la === 123 || _la === 129) {
                {
                {
                this.state = 887;
                this.annotationTypeElementDeclaration();
                }
                }
                this.state = 892;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 893;
            this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
        let localContext = new AnnotationTypeElementDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 126, JavaParser.RULE_annotationTypeElementDeclaration);
        try {
            let alternative: number;
            this.state = 903;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.ABSTRACT:
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.CLASS:
            case JavaParser.DOUBLE:
            case JavaParser.ENUM:
            case JavaParser.FINAL:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.INTERFACE:
            case JavaParser.LONG:
            case JavaParser.NATIVE:
            case JavaParser.PRIVATE:
            case JavaParser.PROTECTED:
            case JavaParser.PUBLIC:
            case JavaParser.SHORT:
            case JavaParser.STATIC:
            case JavaParser.STRICTFP:
            case JavaParser.SYNCHRONIZED:
            case JavaParser.TRANSIENT:
            case JavaParser.VOLATILE:
            case JavaParser.MODULE:
            case JavaParser.OPEN:
            case JavaParser.REQUIRES:
            case JavaParser.EXPORTS:
            case JavaParser.OPENS:
            case JavaParser.TO:
            case JavaParser.USES:
            case JavaParser.PROVIDES:
            case JavaParser.WITH:
            case JavaParser.TRANSITIVE:
            case JavaParser.VAR:
            case JavaParser.YIELD:
            case JavaParser.RECORD:
            case JavaParser.SEALED:
            case JavaParser.PERMITS:
            case JavaParser.NON_SEALED:
            case JavaParser.AT:
            case JavaParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 898;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 97, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 895;
                        this.modifier();
                        }
                        }
                    }
                    this.state = 900;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 97, this.context);
                }
                this.state = 901;
                this.annotationTypeElementRest();
                }
                break;
            case JavaParser.SEMI:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 902;
                this.match(JavaParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotationTypeElementRest(): AnnotationTypeElementRestContext {
        let localContext = new AnnotationTypeElementRestContext(this.context, this.state);
        this.enterRule(localContext, 128, JavaParser.RULE_annotationTypeElementRest);
        try {
            this.state = 929;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 104, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 905;
                this.typeType();
                this.state = 906;
                this.annotationMethodOrConstantRest();
                this.state = 907;
                this.match(JavaParser.SEMI);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 909;
                this.classDeclaration();
                this.state = 911;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 99, this.context) ) {
                case 1:
                    {
                    this.state = 910;
                    this.match(JavaParser.SEMI);
                    }
                    break;
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 913;
                this.interfaceDeclaration();
                this.state = 915;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 100, this.context) ) {
                case 1:
                    {
                    this.state = 914;
                    this.match(JavaParser.SEMI);
                    }
                    break;
                }
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 917;
                this.enumDeclaration();
                this.state = 919;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 101, this.context) ) {
                case 1:
                    {
                    this.state = 918;
                    this.match(JavaParser.SEMI);
                    }
                    break;
                }
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 921;
                this.annotationTypeDeclaration();
                this.state = 923;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 102, this.context) ) {
                case 1:
                    {
                    this.state = 922;
                    this.match(JavaParser.SEMI);
                    }
                    break;
                }
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 925;
                this.recordDeclaration();
                this.state = 927;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 103, this.context) ) {
                case 1:
                    {
                    this.state = 926;
                    this.match(JavaParser.SEMI);
                    }
                    break;
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext {
        let localContext = new AnnotationMethodOrConstantRestContext(this.context, this.state);
        this.enterRule(localContext, 130, JavaParser.RULE_annotationMethodOrConstantRest);
        try {
            this.state = 933;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 105, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 931;
                this.annotationMethodRest();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 932;
                this.annotationConstantRest();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotationMethodRest(): AnnotationMethodRestContext {
        let localContext = new AnnotationMethodRestContext(this.context, this.state);
        this.enterRule(localContext, 132, JavaParser.RULE_annotationMethodRest);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 935;
            this.identifier();
            this.state = 936;
            this.match(JavaParser.LPAREN);
            this.state = 937;
            this.match(JavaParser.RPAREN);
            this.state = 939;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 938;
                this.defaultValue();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotationConstantRest(): AnnotationConstantRestContext {
        let localContext = new AnnotationConstantRestContext(this.context, this.state);
        this.enterRule(localContext, 134, JavaParser.RULE_annotationConstantRest);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 941;
            this.variableDeclarators();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public defaultValue(): DefaultValueContext {
        let localContext = new DefaultValueContext(this.context, this.state);
        this.enterRule(localContext, 136, JavaParser.RULE_defaultValue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 943;
            this.match(JavaParser.DEFAULT);
            this.state = 944;
            this.elementValue();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public moduleDeclaration(): ModuleDeclarationContext {
        let localContext = new ModuleDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 138, JavaParser.RULE_moduleDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 947;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 946;
                this.match(JavaParser.OPEN);
                }
            }

            this.state = 949;
            this.match(JavaParser.MODULE);
            this.state = 950;
            this.qualifiedName();
            this.state = 951;
            this.moduleBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public moduleBody(): ModuleBodyContext {
        let localContext = new ModuleBodyContext(this.context, this.state);
        this.enterRule(localContext, 140, JavaParser.RULE_moduleBody);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 953;
            this.match(JavaParser.LBRACE);
            this.state = 957;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 55) !== 0)) {
                {
                {
                this.state = 954;
                this.moduleDirective();
                }
                }
                this.state = 959;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 960;
            this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public moduleDirective(): ModuleDirectiveContext {
        let localContext = new ModuleDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 142, JavaParser.RULE_moduleDirective);
        let _la: number;
        try {
            let alternative: number;
            this.state = 998;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.REQUIRES:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 962;
                this.match(JavaParser.REQUIRES);
                this.state = 966;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 109, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 963;
                        this.requiresModifier();
                        }
                        }
                    }
                    this.state = 968;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 109, this.context);
                }
                this.state = 969;
                this.qualifiedName();
                this.state = 970;
                this.match(JavaParser.SEMI);
                }
                break;
            case JavaParser.EXPORTS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 972;
                this.match(JavaParser.EXPORTS);
                this.state = 973;
                this.qualifiedName();
                this.state = 976;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 56) {
                    {
                    this.state = 974;
                    this.match(JavaParser.TO);
                    this.state = 975;
                    this.qualifiedName();
                    }
                }

                this.state = 978;
                this.match(JavaParser.SEMI);
                }
                break;
            case JavaParser.OPENS:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 980;
                this.match(JavaParser.OPENS);
                this.state = 981;
                this.qualifiedName();
                this.state = 984;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 56) {
                    {
                    this.state = 982;
                    this.match(JavaParser.TO);
                    this.state = 983;
                    this.qualifiedName();
                    }
                }

                this.state = 986;
                this.match(JavaParser.SEMI);
                }
                break;
            case JavaParser.USES:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 988;
                this.match(JavaParser.USES);
                this.state = 989;
                this.qualifiedName();
                this.state = 990;
                this.match(JavaParser.SEMI);
                }
                break;
            case JavaParser.PROVIDES:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 992;
                this.match(JavaParser.PROVIDES);
                this.state = 993;
                this.qualifiedName();
                this.state = 994;
                this.match(JavaParser.WITH);
                this.state = 995;
                this.qualifiedName();
                this.state = 996;
                this.match(JavaParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public requiresModifier(): RequiresModifierContext {
        let localContext = new RequiresModifierContext(this.context, this.state);
        this.enterRule(localContext, 144, JavaParser.RULE_requiresModifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1000;
            _la = this.tokenStream.LA(1);
            if(!(_la === 38 || _la === 60)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public recordDeclaration(): RecordDeclarationContext {
        let localContext = new RecordDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 146, JavaParser.RULE_recordDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1002;
            this.match(JavaParser.RECORD);
            this.state = 1003;
            this.identifier();
            this.state = 1005;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 89) {
                {
                this.state = 1004;
                this.typeParameters();
                }
            }

            this.state = 1007;
            this.recordHeader();
            this.state = 1010;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 24) {
                {
                this.state = 1008;
                this.match(JavaParser.IMPLEMENTS);
                this.state = 1009;
                this.typeList();
                }
            }

            this.state = 1012;
            this.recordBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public recordHeader(): RecordHeaderContext {
        let localContext = new RecordHeaderContext(this.context, this.state);
        this.enterRule(localContext, 148, JavaParser.RULE_recordHeader);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1014;
            this.match(JavaParser.LPAREN);
            this.state = 1016;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 672153896) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 536854529) !== 0) || _la === 123 || _la === 129) {
                {
                this.state = 1015;
                this.recordComponentList();
                }
            }

            this.state = 1018;
            this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public recordComponentList(): RecordComponentListContext {
        let localContext = new RecordComponentListContext(this.context, this.state);
        this.enterRule(localContext, 150, JavaParser.RULE_recordComponentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1020;
            this.recordComponent();
            this.state = 1025;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 85) {
                {
                {
                this.state = 1021;
                this.match(JavaParser.COMMA);
                this.state = 1022;
                this.recordComponent();
                }
                }
                this.state = 1027;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public recordComponent(): RecordComponentContext {
        let localContext = new RecordComponentContext(this.context, this.state);
        this.enterRule(localContext, 152, JavaParser.RULE_recordComponent);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1028;
            this.typeType();
            this.state = 1029;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public recordBody(): RecordBodyContext {
        let localContext = new RecordBodyContext(this.context, this.state);
        this.enterRule(localContext, 154, JavaParser.RULE_recordBody);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1031;
            this.match(JavaParser.LBRACE);
            this.state = 1035;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014659370) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294812279) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 17334275) !== 0) || _la === 123 || _la === 129) {
                {
                {
                this.state = 1032;
                this.classBodyDeclaration();
                }
                }
                this.state = 1037;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1038;
            this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 156, JavaParser.RULE_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1040;
            this.match(JavaParser.LBRACE);
            this.state = 1044;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3094637374) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294889471) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 118013951) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 545259535) !== 0)) {
                {
                {
                this.state = 1041;
                this.blockStatement();
                }
                }
                this.state = 1046;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1047;
            this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public blockStatement(): BlockStatementContext {
        let localContext = new BlockStatementContext(this.context, this.state);
        this.enterRule(localContext, 158, JavaParser.RULE_blockStatement);
        try {
            this.state = 1054;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 119, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1049;
                this.localVariableDeclaration();
                this.state = 1050;
                this.match(JavaParser.SEMI);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1052;
                this.statement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1053;
                this.localTypeDeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public localVariableDeclaration(): LocalVariableDeclarationContext {
        let localContext = new LocalVariableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 160, JavaParser.RULE_localVariableDeclaration);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1059;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 120, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1056;
                    this.variableModifier();
                    }
                    }
                }
                this.state = 1061;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 120, this.context);
            }
            this.state = 1062;
            this.typeType();
            this.state = 1063;
            this.variableDeclarators();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 162, JavaParser.RULE_identifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1065;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la === 129)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public localTypeDeclaration(): LocalTypeDeclarationContext {
        let localContext = new LocalTypeDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 164, JavaParser.RULE_localTypeDeclaration);
        try {
            let alternative: number;
            this.state = 1079;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.ABSTRACT:
            case JavaParser.CLASS:
            case JavaParser.FINAL:
            case JavaParser.INTERFACE:
            case JavaParser.PRIVATE:
            case JavaParser.PROTECTED:
            case JavaParser.PUBLIC:
            case JavaParser.STATIC:
            case JavaParser.STRICTFP:
            case JavaParser.MODULE:
            case JavaParser.OPEN:
            case JavaParser.REQUIRES:
            case JavaParser.EXPORTS:
            case JavaParser.OPENS:
            case JavaParser.TO:
            case JavaParser.USES:
            case JavaParser.PROVIDES:
            case JavaParser.WITH:
            case JavaParser.TRANSITIVE:
            case JavaParser.VAR:
            case JavaParser.YIELD:
            case JavaParser.RECORD:
            case JavaParser.SEALED:
            case JavaParser.PERMITS:
            case JavaParser.NON_SEALED:
            case JavaParser.AT:
            case JavaParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1070;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 121, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1067;
                        this.classOrInterfaceModifier();
                        }
                        }
                    }
                    this.state = 1072;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 121, this.context);
                }
                this.state = 1076;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case JavaParser.CLASS:
                    {
                    this.state = 1073;
                    this.classDeclaration();
                    }
                    break;
                case JavaParser.INTERFACE:
                    {
                    this.state = 1074;
                    this.interfaceDeclaration();
                    }
                    break;
                case JavaParser.RECORD:
                    {
                    this.state = 1075;
                    this.recordDeclaration();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case JavaParser.SEMI:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1078;
                this.match(JavaParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 166, JavaParser.RULE_statement);
        let _la: number;
        try {
            let alternative: number;
            this.state = 1194;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 137, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1081;
                localContext._blockLabel = this.block();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1082;
                this.match(JavaParser.ASSERT);
                this.state = 1083;
                this.expression(0);
                this.state = 1086;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                    this.state = 1084;
                    this.match(JavaParser.COLON);
                    this.state = 1085;
                    this.expression(0);
                    }
                }

                this.state = 1088;
                this.match(JavaParser.SEMI);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1090;
                this.match(JavaParser.IF);
                this.state = 1091;
                this.parExpression();
                this.state = 1092;
                this.statement();
                this.state = 1095;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 125, this.context) ) {
                case 1:
                    {
                    this.state = 1093;
                    this.match(JavaParser.ELSE);
                    this.state = 1094;
                    this.statement();
                    }
                    break;
                }
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1097;
                this.match(JavaParser.FOR);
                this.state = 1098;
                this.match(JavaParser.LPAREN);
                this.state = 1099;
                this.forControl();
                this.state = 1100;
                this.match(JavaParser.RPAREN);
                this.state = 1101;
                this.statement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1103;
                this.match(JavaParser.WHILE);
                this.state = 1104;
                this.parExpression();
                this.state = 1105;
                this.statement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1107;
                this.match(JavaParser.DO);
                this.state = 1108;
                this.statement();
                this.state = 1109;
                this.match(JavaParser.WHILE);
                this.state = 1110;
                this.parExpression();
                this.state = 1111;
                this.match(JavaParser.SEMI);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1113;
                this.match(JavaParser.TRY);
                this.state = 1114;
                this.block();
                this.state = 1124;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case JavaParser.CATCH:
                    {
                    this.state = 1116;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 1115;
                        this.catchClause();
                        }
                        }
                        this.state = 1118;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 7);
                    this.state = 1121;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 19) {
                        {
                        this.state = 1120;
                        this.finallyBlock();
                        }
                    }

                    }
                    break;
                case JavaParser.FINALLY:
                    {
                    this.state = 1123;
                    this.finallyBlock();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1126;
                this.match(JavaParser.TRY);
                this.state = 1127;
                this.resourceSpecification();
                this.state = 1128;
                this.block();
                this.state = 1132;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 7) {
                    {
                    {
                    this.state = 1129;
                    this.catchClause();
                    }
                    }
                    this.state = 1134;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1136;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19) {
                    {
                    this.state = 1135;
                    this.finallyBlock();
                    }
                }

                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1138;
                this.match(JavaParser.SWITCH);
                this.state = 1139;
                this.parExpression();
                this.state = 1140;
                this.match(JavaParser.LBRACE);
                this.state = 1144;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 131, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1141;
                        this.switchBlockStatementGroup();
                        }
                        }
                    }
                    this.state = 1146;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 131, this.context);
                }
                this.state = 1150;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 6 || _la === 12) {
                    {
                    {
                    this.state = 1147;
                    this.switchLabel();
                    }
                    }
                    this.state = 1152;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1153;
                this.match(JavaParser.RBRACE);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1155;
                this.match(JavaParser.SYNCHRONIZED);
                this.state = 1156;
                this.parExpression();
                this.state = 1157;
                this.block();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1159;
                this.match(JavaParser.RETURN);
                this.state = 1161;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 3758082137) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2154824703) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 272629767) !== 0)) {
                    {
                    this.state = 1160;
                    this.expression(0);
                    }
                }

                this.state = 1163;
                this.match(JavaParser.SEMI);
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1164;
                this.match(JavaParser.THROW);
                this.state = 1165;
                this.expression(0);
                this.state = 1166;
                this.match(JavaParser.SEMI);
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 1168;
                this.match(JavaParser.BREAK);
                this.state = 1170;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la === 129) {
                    {
                    this.state = 1169;
                    this.identifier();
                    }
                }

                this.state = 1172;
                this.match(JavaParser.SEMI);
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 1173;
                this.match(JavaParser.CONTINUE);
                this.state = 1175;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la === 129) {
                    {
                    this.state = 1174;
                    this.identifier();
                    }
                }

                this.state = 1177;
                this.match(JavaParser.SEMI);
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 1178;
                this.match(JavaParser.YIELD);
                this.state = 1179;
                this.expression(0);
                this.state = 1180;
                this.match(JavaParser.SEMI);
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 1182;
                this.match(JavaParser.SEMI);
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 1183;
                localContext._statementExpression = this.expression(0);
                this.state = 1184;
                this.match(JavaParser.SEMI);
                }
                break;
            case 18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 1186;
                this.switchExpression();
                this.state = 1188;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 136, this.context) ) {
                case 1:
                    {
                    this.state = 1187;
                    this.match(JavaParser.SEMI);
                    }
                    break;
                }
                }
                break;
            case 19:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 1190;
                localContext._identifierLabel = this.identifier();
                this.state = 1191;
                this.match(JavaParser.COLON);
                this.state = 1192;
                this.statement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public catchClause(): CatchClauseContext {
        let localContext = new CatchClauseContext(this.context, this.state);
        this.enterRule(localContext, 168, JavaParser.RULE_catchClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1196;
            this.match(JavaParser.CATCH);
            this.state = 1197;
            this.match(JavaParser.LPAREN);
            this.state = 1201;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 138, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1198;
                    this.variableModifier();
                    }
                    }
                }
                this.state = 1203;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 138, this.context);
            }
            this.state = 1204;
            this.catchType();
            this.state = 1205;
            this.identifier();
            this.state = 1206;
            this.match(JavaParser.RPAREN);
            this.state = 1207;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public catchType(): CatchTypeContext {
        let localContext = new CatchTypeContext(this.context, this.state);
        this.enterRule(localContext, 170, JavaParser.RULE_catchType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1209;
            this.qualifiedName();
            this.state = 1214;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 107) {
                {
                {
                this.state = 1210;
                this.match(JavaParser.BITOR);
                this.state = 1211;
                this.qualifiedName();
                }
                }
                this.state = 1216;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public finallyBlock(): FinallyBlockContext {
        let localContext = new FinallyBlockContext(this.context, this.state);
        this.enterRule(localContext, 172, JavaParser.RULE_finallyBlock);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1217;
            this.match(JavaParser.FINALLY);
            this.state = 1218;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public resourceSpecification(): ResourceSpecificationContext {
        let localContext = new ResourceSpecificationContext(this.context, this.state);
        this.enterRule(localContext, 174, JavaParser.RULE_resourceSpecification);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1220;
            this.match(JavaParser.LPAREN);
            this.state = 1221;
            this.resources();
            this.state = 1223;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 84) {
                {
                this.state = 1222;
                this.match(JavaParser.SEMI);
                }
            }

            this.state = 1225;
            this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public resources(): ResourcesContext {
        let localContext = new ResourcesContext(this.context, this.state);
        this.enterRule(localContext, 176, JavaParser.RULE_resources);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1227;
            this.resource();
            this.state = 1232;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 141, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1228;
                    this.match(JavaParser.SEMI);
                    this.state = 1229;
                    this.resource();
                    }
                    }
                }
                this.state = 1234;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 141, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public resource(): ResourceContext {
        let localContext = new ResourceContext(this.context, this.state);
        this.enterRule(localContext, 178, JavaParser.RULE_resource);
        try {
            let alternative: number;
            this.state = 1252;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 144, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1238;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 142, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1235;
                        this.variableModifier();
                        }
                        }
                    }
                    this.state = 1240;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 142, this.context);
                }
                this.state = 1246;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 143, this.context) ) {
                case 1:
                    {
                    this.state = 1241;
                    this.classOrInterfaceType();
                    this.state = 1242;
                    this.variableDeclaratorId();
                    }
                    break;
                case 2:
                    {
                    this.state = 1244;
                    this.match(JavaParser.VAR);
                    this.state = 1245;
                    this.identifier();
                    }
                    break;
                }
                this.state = 1248;
                this.match(JavaParser.ASSIGN);
                this.state = 1249;
                this.expression(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1251;
                this.identifier();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
        let localContext = new SwitchBlockStatementGroupContext(this.context, this.state);
        this.enterRule(localContext, 180, JavaParser.RULE_switchBlockStatementGroup);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1255;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1254;
                this.switchLabel();
                }
                }
                this.state = 1257;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 6 || _la === 12);
            this.state = 1260;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1259;
                this.blockStatement();
                }
                }
                this.state = 1262;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3094637374) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294889471) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 118013951) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 545259535) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public switchLabel(): SwitchLabelContext {
        let localContext = new SwitchLabelContext(this.context, this.state);
        this.enterRule(localContext, 182, JavaParser.RULE_switchLabel);
        try {
            this.state = 1275;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.CASE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1264;
                this.match(JavaParser.CASE);
                this.state = 1270;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 147, this.context) ) {
                case 1:
                    {
                    this.state = 1265;
                    localContext._constantExpression = this.expression(0);
                    }
                    break;
                case 2:
                    {
                    this.state = 1266;
                    localContext._enumConstantName = this.match(JavaParser.IDENTIFIER);
                    }
                    break;
                case 3:
                    {
                    this.state = 1267;
                    this.typeType();
                    this.state = 1268;
                    localContext._varName = this.identifier();
                    }
                    break;
                }
                this.state = 1272;
                this.match(JavaParser.COLON);
                }
                break;
            case JavaParser.DEFAULT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1273;
                this.match(JavaParser.DEFAULT);
                this.state = 1274;
                this.match(JavaParser.COLON);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public forControl(): ForControlContext {
        let localContext = new ForControlContext(this.context, this.state);
        this.enterRule(localContext, 184, JavaParser.RULE_forControl);
        let _la: number;
        try {
            this.state = 1289;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 152, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1277;
                this.enhancedForControl();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1279;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819899688) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 3758082137) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2154824703) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 272629767) !== 0)) {
                    {
                    this.state = 1278;
                    this.forInit();
                    }
                }

                this.state = 1281;
                this.match(JavaParser.SEMI);
                this.state = 1283;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 3758082137) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2154824703) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 272629767) !== 0)) {
                    {
                    this.state = 1282;
                    this.expression(0);
                    }
                }

                this.state = 1285;
                this.match(JavaParser.SEMI);
                this.state = 1287;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 3758082137) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2154824703) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 272629767) !== 0)) {
                    {
                    this.state = 1286;
                    localContext._forUpdate = this.expressionList();
                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public forInit(): ForInitContext {
        let localContext = new ForInitContext(this.context, this.state);
        this.enterRule(localContext, 186, JavaParser.RULE_forInit);
        try {
            this.state = 1293;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 153, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1291;
                this.localVariableDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1292;
                this.expressionList();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enhancedForControl(): EnhancedForControlContext {
        let localContext = new EnhancedForControlContext(this.context, this.state);
        this.enterRule(localContext, 188, JavaParser.RULE_enhancedForControl);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1298;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 154, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1295;
                    this.variableModifier();
                    }
                    }
                }
                this.state = 1300;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 154, this.context);
            }
            this.state = 1303;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 155, this.context) ) {
            case 1:
                {
                this.state = 1301;
                this.typeType();
                }
                break;
            case 2:
                {
                this.state = 1302;
                this.match(JavaParser.VAR);
                }
                break;
            }
            this.state = 1305;
            this.variableDeclaratorId();
            this.state = 1306;
            this.match(JavaParser.COLON);
            this.state = 1307;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parExpression(): ParExpressionContext {
        let localContext = new ParExpressionContext(this.context, this.state);
        this.enterRule(localContext, 190, JavaParser.RULE_parExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1309;
            this.match(JavaParser.LPAREN);
            this.state = 1310;
            this.expression(0);
            this.state = 1311;
            this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionList(): ExpressionListContext {
        let localContext = new ExpressionListContext(this.context, this.state);
        this.enterRule(localContext, 192, JavaParser.RULE_expressionList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1313;
            this.expression(0);
            this.state = 1318;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 85) {
                {
                {
                this.state = 1314;
                this.match(JavaParser.COMMA);
                this.state = 1315;
                this.expression(0);
                }
                }
                this.state = 1320;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public methodCall(): MethodCallContext {
        let localContext = new MethodCallContext(this.context, this.state);
        this.enterRule(localContext, 194, JavaParser.RULE_methodCall);
        let _la: number;
        try {
            this.state = 1340;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.MODULE:
            case JavaParser.OPEN:
            case JavaParser.REQUIRES:
            case JavaParser.EXPORTS:
            case JavaParser.OPENS:
            case JavaParser.TO:
            case JavaParser.USES:
            case JavaParser.PROVIDES:
            case JavaParser.WITH:
            case JavaParser.TRANSITIVE:
            case JavaParser.VAR:
            case JavaParser.YIELD:
            case JavaParser.RECORD:
            case JavaParser.SEALED:
            case JavaParser.PERMITS:
            case JavaParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1321;
                this.identifier();
                this.state = 1322;
                this.match(JavaParser.LPAREN);
                this.state = 1324;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 3758082137) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2154824703) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 272629767) !== 0)) {
                    {
                    this.state = 1323;
                    this.expressionList();
                    }
                }

                this.state = 1326;
                this.match(JavaParser.RPAREN);
                }
                break;
            case JavaParser.THIS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1328;
                this.match(JavaParser.THIS);
                this.state = 1329;
                this.match(JavaParser.LPAREN);
                this.state = 1331;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 3758082137) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2154824703) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 272629767) !== 0)) {
                    {
                    this.state = 1330;
                    this.expressionList();
                    }
                }

                this.state = 1333;
                this.match(JavaParser.RPAREN);
                }
                break;
            case JavaParser.SUPER:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1334;
                this.match(JavaParser.SUPER);
                this.state = 1335;
                this.match(JavaParser.LPAREN);
                this.state = 1337;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 3758082137) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2154824703) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 272629767) !== 0)) {
                    {
                    this.state = 1336;
                    this.expressionList();
                    }
                }

                this.state = 1339;
                this.match(JavaParser.RPAREN);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 196;
        this.enterRecursionRule(localContext, 196, JavaParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1387;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 166, this.context) ) {
            case 1:
                {
                this.state = 1343;
                this.primary();
                }
                break;
            case 2:
                {
                this.state = 1344;
                this.methodCall();
                }
                break;
            case 3:
                {
                this.state = 1345;
                this.match(JavaParser.NEW);
                this.state = 1346;
                this.creator();
                }
                break;
            case 4:
                {
                this.state = 1347;
                this.match(JavaParser.LPAREN);
                this.state = 1351;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 161, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1348;
                        this.annotation();
                        }
                        }
                    }
                    this.state = 1353;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 161, this.context);
                }
                this.state = 1354;
                this.typeType();
                this.state = 1359;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 106) {
                    {
                    {
                    this.state = 1355;
                    this.match(JavaParser.BITAND);
                    this.state = 1356;
                    this.typeType();
                    }
                    }
                    this.state = 1361;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1362;
                this.match(JavaParser.RPAREN);
                this.state = 1363;
                this.expression(22);
                }
                break;
            case 5:
                {
                this.state = 1365;
                localContext._prefix = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 15) !== 0))) {
                    localContext._prefix = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1366;
                this.expression(20);
                }
                break;
            case 6:
                {
                this.state = 1367;
                localContext._prefix = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 90 || _la === 91)) {
                    localContext._prefix = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1368;
                this.expression(19);
                }
                break;
            case 7:
                {
                this.state = 1369;
                this.lambdaExpression();
                }
                break;
            case 8:
                {
                this.state = 1370;
                this.switchExpression();
                }
                break;
            case 9:
                {
                this.state = 1371;
                this.typeType();
                this.state = 1372;
                this.match(JavaParser.COLONCOLON);
                this.state = 1378;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case JavaParser.MODULE:
                case JavaParser.OPEN:
                case JavaParser.REQUIRES:
                case JavaParser.EXPORTS:
                case JavaParser.OPENS:
                case JavaParser.TO:
                case JavaParser.USES:
                case JavaParser.PROVIDES:
                case JavaParser.WITH:
                case JavaParser.TRANSITIVE:
                case JavaParser.VAR:
                case JavaParser.YIELD:
                case JavaParser.RECORD:
                case JavaParser.SEALED:
                case JavaParser.PERMITS:
                case JavaParser.LT:
                case JavaParser.IDENTIFIER:
                    {
                    this.state = 1374;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 89) {
                        {
                        this.state = 1373;
                        this.typeArguments();
                        }
                    }

                    this.state = 1376;
                    this.identifier();
                    }
                    break;
                case JavaParser.NEW:
                    {
                    this.state = 1377;
                    this.match(JavaParser.NEW);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case 10:
                {
                this.state = 1380;
                this.classType();
                this.state = 1381;
                this.match(JavaParser.COLONCOLON);
                this.state = 1383;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 89) {
                    {
                    this.state = 1382;
                    this.typeArguments();
                    }
                }

                this.state = 1385;
                this.match(JavaParser.NEW);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1472;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 173, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1470;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 172, this.context) ) {
                    case 1:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1389;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        this.state = 1390;
                        localContext._bop = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 35) !== 0))) {
                            localContext._bop = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1391;
                        this.expression(19);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1392;
                        if (!(this.precpred(this.context, 17))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                        }
                        this.state = 1393;
                        localContext._bop = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 102 || _la === 103)) {
                            localContext._bop = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1394;
                        this.expression(18);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1395;
                        if (!(this.precpred(this.context, 16))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 16)");
                        }
                        this.state = 1403;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 167, this.context) ) {
                        case 1:
                            {
                            this.state = 1396;
                            this.match(JavaParser.LT);
                            this.state = 1397;
                            this.match(JavaParser.LT);
                            }
                            break;
                        case 2:
                            {
                            this.state = 1398;
                            this.match(JavaParser.GT);
                            this.state = 1399;
                            this.match(JavaParser.GT);
                            this.state = 1400;
                            this.match(JavaParser.GT);
                            }
                            break;
                        case 3:
                            {
                            this.state = 1401;
                            this.match(JavaParser.GT);
                            this.state = 1402;
                            this.match(JavaParser.GT);
                            }
                            break;
                        }
                        this.state = 1405;
                        this.expression(17);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1406;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 1407;
                        localContext._bop = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 387) !== 0))) {
                            localContext._bop = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1408;
                        this.expression(16);
                        }
                        break;
                    case 5:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1409;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 1410;
                        localContext._bop = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 94 || _la === 97)) {
                            localContext._bop = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1411;
                        this.expression(14);
                        }
                        break;
                    case 6:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1412;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 1413;
                        localContext._bop = this.match(JavaParser.BITAND);
                        this.state = 1414;
                        this.expression(13);
                        }
                        break;
                    case 7:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1415;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 1416;
                        localContext._bop = this.match(JavaParser.CARET);
                        this.state = 1417;
                        this.expression(12);
                        }
                        break;
                    case 8:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1418;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 1419;
                        localContext._bop = this.match(JavaParser.BITOR);
                        this.state = 1420;
                        this.expression(11);
                        }
                        break;
                    case 9:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1421;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 1422;
                        localContext._bop = this.match(JavaParser.AND);
                        this.state = 1423;
                        this.expression(10);
                        }
                        break;
                    case 10:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1424;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 1425;
                        localContext._bop = this.match(JavaParser.OR);
                        this.state = 1426;
                        this.expression(9);
                        }
                        break;
                    case 11:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1427;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 1428;
                        localContext._bop = this.match(JavaParser.QUESTION);
                        this.state = 1429;
                        this.expression(0);
                        this.state = 1430;
                        this.match(JavaParser.COLON);
                        this.state = 1431;
                        this.expression(7);
                        }
                        break;
                    case 12:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1433;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 1434;
                        localContext._bop = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 4286578689) !== 0) || _la === 119 || _la === 120)) {
                            localContext._bop = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1435;
                        this.expression(6);
                        }
                        break;
                    case 13:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1436;
                        if (!(this.precpred(this.context, 26))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 26)");
                        }
                        this.state = 1437;
                        localContext._bop = this.match(JavaParser.DOT);
                        this.state = 1449;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 169, this.context) ) {
                        case 1:
                            {
                            this.state = 1438;
                            this.identifier();
                            }
                            break;
                        case 2:
                            {
                            this.state = 1439;
                            this.methodCall();
                            }
                            break;
                        case 3:
                            {
                            this.state = 1440;
                            this.match(JavaParser.THIS);
                            }
                            break;
                        case 4:
                            {
                            this.state = 1441;
                            this.match(JavaParser.NEW);
                            this.state = 1443;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 89) {
                                {
                                this.state = 1442;
                                this.nonWildcardTypeArguments();
                                }
                            }

                            this.state = 1445;
                            this.innerCreator();
                            }
                            break;
                        case 5:
                            {
                            this.state = 1446;
                            this.match(JavaParser.SUPER);
                            this.state = 1447;
                            this.superSuffix();
                            }
                            break;
                        case 6:
                            {
                            this.state = 1448;
                            this.explicitGenericInvocation();
                            }
                            break;
                        }
                        }
                        break;
                    case 14:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1451;
                        if (!(this.precpred(this.context, 25))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 25)");
                        }
                        this.state = 1452;
                        this.match(JavaParser.LBRACK);
                        this.state = 1453;
                        this.expression(0);
                        this.state = 1454;
                        this.match(JavaParser.RBRACK);
                        }
                        break;
                    case 15:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1456;
                        if (!(this.precpred(this.context, 21))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 21)");
                        }
                        this.state = 1457;
                        localContext._postfix = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 100 || _la === 101)) {
                            localContext._postfix = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                        break;
                    case 16:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1458;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 1459;
                        localContext._bop = this.match(JavaParser.INSTANCEOF);
                        this.state = 1462;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 170, this.context) ) {
                        case 1:
                            {
                            this.state = 1460;
                            this.typeType();
                            }
                            break;
                        case 2:
                            {
                            this.state = 1461;
                            this.pattern();
                            }
                            break;
                        }
                        }
                        break;
                    case 17:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1464;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1465;
                        this.match(JavaParser.COLONCOLON);
                        this.state = 1467;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 89) {
                            {
                            this.state = 1466;
                            this.typeArguments();
                            }
                        }

                        this.state = 1469;
                        this.identifier();
                        }
                        break;
                    }
                    }
                }
                this.state = 1474;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 173, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public pattern(): PatternContext {
        let localContext = new PatternContext(this.context, this.state);
        this.enterRule(localContext, 198, JavaParser.RULE_pattern);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1478;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 174, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1475;
                    this.variableModifier();
                    }
                    }
                }
                this.state = 1480;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 174, this.context);
            }
            this.state = 1481;
            this.typeType();
            this.state = 1485;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 175, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1482;
                    this.annotation();
                    }
                    }
                }
                this.state = 1487;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 175, this.context);
            }
            this.state = 1488;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lambdaExpression(): LambdaExpressionContext {
        let localContext = new LambdaExpressionContext(this.context, this.state);
        this.enterRule(localContext, 200, JavaParser.RULE_lambdaExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1490;
            this.lambdaParameters();
            this.state = 1491;
            this.match(JavaParser.ARROW);
            this.state = 1492;
            this.lambdaBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lambdaParameters(): LambdaParametersContext {
        let localContext = new LambdaParametersContext(this.context, this.state);
        this.enterRule(localContext, 202, JavaParser.RULE_lambdaParameters);
        let _la: number;
        try {
            this.state = 1516;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 179, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1494;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1495;
                this.match(JavaParser.LPAREN);
                this.state = 1497;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 672416040) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 536854529) !== 0) || _la === 123 || _la === 129) {
                    {
                    this.state = 1496;
                    this.formalParameterList();
                    }
                }

                this.state = 1499;
                this.match(JavaParser.RPAREN);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1500;
                this.match(JavaParser.LPAREN);
                this.state = 1501;
                this.identifier();
                this.state = 1506;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 85) {
                    {
                    {
                    this.state = 1502;
                    this.match(JavaParser.COMMA);
                    this.state = 1503;
                    this.identifier();
                    }
                    }
                    this.state = 1508;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1509;
                this.match(JavaParser.RPAREN);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1511;
                this.match(JavaParser.LPAREN);
                this.state = 1513;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 18 || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la === 123 || _la === 129) {
                    {
                    this.state = 1512;
                    this.lambdaLVTIList();
                    }
                }

                this.state = 1515;
                this.match(JavaParser.RPAREN);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lambdaBody(): LambdaBodyContext {
        let localContext = new LambdaBodyContext(this.context, this.state);
        this.enterRule(localContext, 204, JavaParser.RULE_lambdaBody);
        try {
            this.state = 1520;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.DOUBLE:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.LONG:
            case JavaParser.NEW:
            case JavaParser.SHORT:
            case JavaParser.SUPER:
            case JavaParser.SWITCH:
            case JavaParser.THIS:
            case JavaParser.VOID:
            case JavaParser.MODULE:
            case JavaParser.OPEN:
            case JavaParser.REQUIRES:
            case JavaParser.EXPORTS:
            case JavaParser.OPENS:
            case JavaParser.TO:
            case JavaParser.USES:
            case JavaParser.PROVIDES:
            case JavaParser.WITH:
            case JavaParser.TRANSITIVE:
            case JavaParser.VAR:
            case JavaParser.YIELD:
            case JavaParser.RECORD:
            case JavaParser.SEALED:
            case JavaParser.PERMITS:
            case JavaParser.DECIMAL_LITERAL:
            case JavaParser.HEX_LITERAL:
            case JavaParser.OCT_LITERAL:
            case JavaParser.BINARY_LITERAL:
            case JavaParser.FLOAT_LITERAL:
            case JavaParser.HEX_FLOAT_LITERAL:
            case JavaParser.BOOL_LITERAL:
            case JavaParser.CHAR_LITERAL:
            case JavaParser.STRING_LITERAL:
            case JavaParser.TEXT_BLOCK:
            case JavaParser.NULL_LITERAL:
            case JavaParser.LPAREN:
            case JavaParser.LT:
            case JavaParser.BANG:
            case JavaParser.TILDE:
            case JavaParser.INC:
            case JavaParser.DEC:
            case JavaParser.ADD:
            case JavaParser.SUB:
            case JavaParser.AT:
            case JavaParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1518;
                this.expression(0);
                }
                break;
            case JavaParser.LBRACE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1519;
                this.block();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public primary(): PrimaryContext {
        let localContext = new PrimaryContext(this.context, this.state);
        this.enterRule(localContext, 206, JavaParser.RULE_primary);
        try {
            this.state = 1540;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 182, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1522;
                this.match(JavaParser.LPAREN);
                this.state = 1523;
                this.expression(0);
                this.state = 1524;
                this.match(JavaParser.RPAREN);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1526;
                this.match(JavaParser.THIS);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1527;
                this.match(JavaParser.SUPER);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1528;
                this.literal();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1529;
                this.identifier();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1530;
                this.typeTypeOrVoid();
                this.state = 1531;
                this.match(JavaParser.DOT);
                this.state = 1532;
                this.match(JavaParser.CLASS);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1534;
                this.nonWildcardTypeArguments();
                this.state = 1538;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case JavaParser.SUPER:
                case JavaParser.MODULE:
                case JavaParser.OPEN:
                case JavaParser.REQUIRES:
                case JavaParser.EXPORTS:
                case JavaParser.OPENS:
                case JavaParser.TO:
                case JavaParser.USES:
                case JavaParser.PROVIDES:
                case JavaParser.WITH:
                case JavaParser.TRANSITIVE:
                case JavaParser.VAR:
                case JavaParser.YIELD:
                case JavaParser.RECORD:
                case JavaParser.SEALED:
                case JavaParser.PERMITS:
                case JavaParser.IDENTIFIER:
                    {
                    this.state = 1535;
                    this.explicitGenericInvocationSuffix();
                    }
                    break;
                case JavaParser.THIS:
                    {
                    this.state = 1536;
                    this.match(JavaParser.THIS);
                    this.state = 1537;
                    this.arguments();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public switchExpression(): SwitchExpressionContext {
        let localContext = new SwitchExpressionContext(this.context, this.state);
        this.enterRule(localContext, 208, JavaParser.RULE_switchExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1542;
            this.match(JavaParser.SWITCH);
            this.state = 1543;
            this.parExpression();
            this.state = 1544;
            this.match(JavaParser.LBRACE);
            this.state = 1548;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 6 || _la === 12) {
                {
                {
                this.state = 1545;
                this.switchLabeledRule();
                }
                }
                this.state = 1550;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1551;
            this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public switchLabeledRule(): SwitchLabeledRuleContext {
        let localContext = new SwitchLabeledRuleContext(this.context, this.state);
        this.enterRule(localContext, 210, JavaParser.RULE_switchLabeledRule);
        let _la: number;
        try {
            this.state = 1564;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.CASE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1553;
                this.match(JavaParser.CASE);
                this.state = 1557;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 184, this.context) ) {
                case 1:
                    {
                    this.state = 1554;
                    this.expressionList();
                    }
                    break;
                case 2:
                    {
                    this.state = 1555;
                    this.match(JavaParser.NULL_LITERAL);
                    }
                    break;
                case 3:
                    {
                    this.state = 1556;
                    this.guardedPattern(0);
                    }
                    break;
                }
                this.state = 1559;
                _la = this.tokenStream.LA(1);
                if(!(_la === 93 || _la === 121)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1560;
                this.switchRuleOutcome();
                }
                break;
            case JavaParser.DEFAULT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1561;
                this.match(JavaParser.DEFAULT);
                this.state = 1562;
                _la = this.tokenStream.LA(1);
                if(!(_la === 93 || _la === 121)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1563;
                this.switchRuleOutcome();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public guardedPattern(): GuardedPatternContext;
    public guardedPattern(_p: number): GuardedPatternContext;
    public guardedPattern(_p?: number): GuardedPatternContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new GuardedPatternContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 212;
        this.enterRecursionRule(localContext, 212, JavaParser.RULE_guardedPattern, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1592;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.LPAREN:
                {
                this.state = 1567;
                this.match(JavaParser.LPAREN);
                this.state = 1568;
                this.guardedPattern(0);
                this.state = 1569;
                this.match(JavaParser.RPAREN);
                }
                break;
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.DOUBLE:
            case JavaParser.FINAL:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.LONG:
            case JavaParser.SHORT:
            case JavaParser.MODULE:
            case JavaParser.OPEN:
            case JavaParser.REQUIRES:
            case JavaParser.EXPORTS:
            case JavaParser.OPENS:
            case JavaParser.TO:
            case JavaParser.USES:
            case JavaParser.PROVIDES:
            case JavaParser.WITH:
            case JavaParser.TRANSITIVE:
            case JavaParser.VAR:
            case JavaParser.YIELD:
            case JavaParser.RECORD:
            case JavaParser.SEALED:
            case JavaParser.PERMITS:
            case JavaParser.AT:
            case JavaParser.IDENTIFIER:
                {
                this.state = 1574;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 186, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1571;
                        this.variableModifier();
                        }
                        }
                    }
                    this.state = 1576;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 186, this.context);
                }
                this.state = 1577;
                this.typeType();
                this.state = 1581;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 187, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1578;
                        this.annotation();
                        }
                        }
                    }
                    this.state = 1583;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 187, this.context);
                }
                this.state = 1584;
                this.identifier();
                this.state = 1589;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 188, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1585;
                        this.match(JavaParser.AND);
                        this.state = 1586;
                        this.expression(0);
                        }
                        }
                    }
                    this.state = 1591;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 188, this.context);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1599;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 190, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new GuardedPatternContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_guardedPattern);
                    this.state = 1594;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 1595;
                    this.match(JavaParser.AND);
                    this.state = 1596;
                    this.expression(0);
                    }
                    }
                }
                this.state = 1601;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 190, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public switchRuleOutcome(): SwitchRuleOutcomeContext {
        let localContext = new SwitchRuleOutcomeContext(this.context, this.state);
        this.enterRule(localContext, 214, JavaParser.RULE_switchRuleOutcome);
        let _la: number;
        try {
            this.state = 1609;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 192, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1602;
                this.block();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1606;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3094637374) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4294889471) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 118013951) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 545259535) !== 0)) {
                    {
                    {
                    this.state = 1603;
                    this.blockStatement();
                    }
                    }
                    this.state = 1608;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classType(): ClassTypeContext {
        let localContext = new ClassTypeContext(this.context, this.state);
        this.enterRule(localContext, 216, JavaParser.RULE_classType);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1614;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 193, this.context) ) {
            case 1:
                {
                this.state = 1611;
                this.classOrInterfaceType();
                this.state = 1612;
                this.match(JavaParser.DOT);
                }
                break;
            }
            this.state = 1619;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 194, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1616;
                    this.annotation();
                    }
                    }
                }
                this.state = 1621;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 194, this.context);
            }
            this.state = 1622;
            this.identifier();
            this.state = 1624;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 89) {
                {
                this.state = 1623;
                this.typeArguments();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public creator(): CreatorContext {
        let localContext = new CreatorContext(this.context, this.state);
        this.enterRule(localContext, 218, JavaParser.RULE_creator);
        try {
            this.state = 1635;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.LT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1626;
                this.nonWildcardTypeArguments();
                this.state = 1627;
                this.createdName();
                this.state = 1628;
                this.classCreatorRest();
                }
                break;
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.DOUBLE:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.LONG:
            case JavaParser.SHORT:
            case JavaParser.MODULE:
            case JavaParser.OPEN:
            case JavaParser.REQUIRES:
            case JavaParser.EXPORTS:
            case JavaParser.OPENS:
            case JavaParser.TO:
            case JavaParser.USES:
            case JavaParser.PROVIDES:
            case JavaParser.WITH:
            case JavaParser.TRANSITIVE:
            case JavaParser.VAR:
            case JavaParser.YIELD:
            case JavaParser.RECORD:
            case JavaParser.SEALED:
            case JavaParser.PERMITS:
            case JavaParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1630;
                this.createdName();
                this.state = 1633;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case JavaParser.LBRACK:
                    {
                    this.state = 1631;
                    this.arrayCreatorRest();
                    }
                    break;
                case JavaParser.LPAREN:
                    {
                    this.state = 1632;
                    this.classCreatorRest();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createdName(): CreatedNameContext {
        let localContext = new CreatedNameContext(this.context, this.state);
        this.enterRule(localContext, 220, JavaParser.RULE_createdName);
        let _la: number;
        try {
            this.state = 1652;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.MODULE:
            case JavaParser.OPEN:
            case JavaParser.REQUIRES:
            case JavaParser.EXPORTS:
            case JavaParser.OPENS:
            case JavaParser.TO:
            case JavaParser.USES:
            case JavaParser.PROVIDES:
            case JavaParser.WITH:
            case JavaParser.TRANSITIVE:
            case JavaParser.VAR:
            case JavaParser.YIELD:
            case JavaParser.RECORD:
            case JavaParser.SEALED:
            case JavaParser.PERMITS:
            case JavaParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1637;
                this.identifier();
                this.state = 1639;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 89) {
                    {
                    this.state = 1638;
                    this.typeArgumentsOrDiamond();
                    }
                }

                this.state = 1648;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 86) {
                    {
                    {
                    this.state = 1641;
                    this.match(JavaParser.DOT);
                    this.state = 1642;
                    this.identifier();
                    this.state = 1644;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 89) {
                        {
                        this.state = 1643;
                        this.typeArgumentsOrDiamond();
                        }
                    }

                    }
                    }
                    this.state = 1650;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.DOUBLE:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.LONG:
            case JavaParser.SHORT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1651;
                this.primitiveType();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public innerCreator(): InnerCreatorContext {
        let localContext = new InnerCreatorContext(this.context, this.state);
        this.enterRule(localContext, 222, JavaParser.RULE_innerCreator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1654;
            this.identifier();
            this.state = 1656;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 89) {
                {
                this.state = 1655;
                this.nonWildcardTypeArgumentsOrDiamond();
                }
            }

            this.state = 1658;
            this.classCreatorRest();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayCreatorRest(): ArrayCreatorRestContext {
        let localContext = new ArrayCreatorRestContext(this.context, this.state);
        this.enterRule(localContext, 224, JavaParser.RULE_arrayCreatorRest);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1660;
            this.match(JavaParser.LBRACK);
            this.state = 1688;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.RBRACK:
                {
                this.state = 1661;
                this.match(JavaParser.RBRACK);
                this.state = 1666;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 82) {
                    {
                    {
                    this.state = 1662;
                    this.match(JavaParser.LBRACK);
                    this.state = 1663;
                    this.match(JavaParser.RBRACK);
                    }
                    }
                    this.state = 1668;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1669;
                this.arrayInitializer();
                }
                break;
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.DOUBLE:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.LONG:
            case JavaParser.NEW:
            case JavaParser.SHORT:
            case JavaParser.SUPER:
            case JavaParser.SWITCH:
            case JavaParser.THIS:
            case JavaParser.VOID:
            case JavaParser.MODULE:
            case JavaParser.OPEN:
            case JavaParser.REQUIRES:
            case JavaParser.EXPORTS:
            case JavaParser.OPENS:
            case JavaParser.TO:
            case JavaParser.USES:
            case JavaParser.PROVIDES:
            case JavaParser.WITH:
            case JavaParser.TRANSITIVE:
            case JavaParser.VAR:
            case JavaParser.YIELD:
            case JavaParser.RECORD:
            case JavaParser.SEALED:
            case JavaParser.PERMITS:
            case JavaParser.DECIMAL_LITERAL:
            case JavaParser.HEX_LITERAL:
            case JavaParser.OCT_LITERAL:
            case JavaParser.BINARY_LITERAL:
            case JavaParser.FLOAT_LITERAL:
            case JavaParser.HEX_FLOAT_LITERAL:
            case JavaParser.BOOL_LITERAL:
            case JavaParser.CHAR_LITERAL:
            case JavaParser.STRING_LITERAL:
            case JavaParser.TEXT_BLOCK:
            case JavaParser.NULL_LITERAL:
            case JavaParser.LPAREN:
            case JavaParser.LT:
            case JavaParser.BANG:
            case JavaParser.TILDE:
            case JavaParser.INC:
            case JavaParser.DEC:
            case JavaParser.ADD:
            case JavaParser.SUB:
            case JavaParser.AT:
            case JavaParser.IDENTIFIER:
                {
                this.state = 1670;
                this.expression(0);
                this.state = 1671;
                this.match(JavaParser.RBRACK);
                this.state = 1678;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 204, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1672;
                        this.match(JavaParser.LBRACK);
                        this.state = 1673;
                        this.expression(0);
                        this.state = 1674;
                        this.match(JavaParser.RBRACK);
                        }
                        }
                    }
                    this.state = 1680;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 204, this.context);
                }
                this.state = 1685;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 205, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1681;
                        this.match(JavaParser.LBRACK);
                        this.state = 1682;
                        this.match(JavaParser.RBRACK);
                        }
                        }
                    }
                    this.state = 1687;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 205, this.context);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classCreatorRest(): ClassCreatorRestContext {
        let localContext = new ClassCreatorRestContext(this.context, this.state);
        this.enterRule(localContext, 226, JavaParser.RULE_classCreatorRest);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1690;
            this.arguments();
            this.state = 1692;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 207, this.context) ) {
            case 1:
                {
                this.state = 1691;
                this.classBody();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public explicitGenericInvocation(): ExplicitGenericInvocationContext {
        let localContext = new ExplicitGenericInvocationContext(this.context, this.state);
        this.enterRule(localContext, 228, JavaParser.RULE_explicitGenericInvocation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1694;
            this.nonWildcardTypeArguments();
            this.state = 1695;
            this.explicitGenericInvocationSuffix();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
        let localContext = new TypeArgumentsOrDiamondContext(this.context, this.state);
        this.enterRule(localContext, 230, JavaParser.RULE_typeArgumentsOrDiamond);
        try {
            this.state = 1700;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 208, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1697;
                this.match(JavaParser.LT);
                this.state = 1698;
                this.match(JavaParser.GT);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1699;
                this.typeArguments();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext {
        let localContext = new NonWildcardTypeArgumentsOrDiamondContext(this.context, this.state);
        this.enterRule(localContext, 232, JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond);
        try {
            this.state = 1705;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 209, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1702;
                this.match(JavaParser.LT);
                this.state = 1703;
                this.match(JavaParser.GT);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1704;
                this.nonWildcardTypeArguments();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
        let localContext = new NonWildcardTypeArgumentsContext(this.context, this.state);
        this.enterRule(localContext, 234, JavaParser.RULE_nonWildcardTypeArguments);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1707;
            this.match(JavaParser.LT);
            this.state = 1708;
            this.typeList();
            this.state = 1709;
            this.match(JavaParser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeList(): TypeListContext {
        let localContext = new TypeListContext(this.context, this.state);
        this.enterRule(localContext, 236, JavaParser.RULE_typeList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1711;
            this.typeType();
            this.state = 1716;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 85) {
                {
                {
                this.state = 1712;
                this.match(JavaParser.COMMA);
                this.state = 1713;
                this.typeType();
                }
                }
                this.state = 1718;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeType(): TypeTypeContext {
        let localContext = new TypeTypeContext(this.context, this.state);
        this.enterRule(localContext, 238, JavaParser.RULE_typeType);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1722;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 211, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1719;
                    this.annotation();
                    }
                    }
                }
                this.state = 1724;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 211, this.context);
            }
            this.state = 1727;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.MODULE:
            case JavaParser.OPEN:
            case JavaParser.REQUIRES:
            case JavaParser.EXPORTS:
            case JavaParser.OPENS:
            case JavaParser.TO:
            case JavaParser.USES:
            case JavaParser.PROVIDES:
            case JavaParser.WITH:
            case JavaParser.TRANSITIVE:
            case JavaParser.VAR:
            case JavaParser.YIELD:
            case JavaParser.RECORD:
            case JavaParser.SEALED:
            case JavaParser.PERMITS:
            case JavaParser.IDENTIFIER:
                {
                this.state = 1725;
                this.classOrInterfaceType();
                }
                break;
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.DOUBLE:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.LONG:
            case JavaParser.SHORT:
                {
                this.state = 1726;
                this.primitiveType();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1739;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 214, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1732;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 32767) !== 0) || _la === 123 || _la === 129) {
                        {
                        {
                        this.state = 1729;
                        this.annotation();
                        }
                        }
                        this.state = 1734;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 1735;
                    this.match(JavaParser.LBRACK);
                    this.state = 1736;
                    this.match(JavaParser.RBRACK);
                    }
                    }
                }
                this.state = 1741;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 214, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public primitiveType(): PrimitiveTypeContext {
        let localContext = new PrimitiveTypeContext(this.context, this.state);
        this.enterRule(localContext, 240, JavaParser.RULE_primitiveType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1742;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 672153896) !== 0) || _la === 37)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeArguments(): TypeArgumentsContext {
        let localContext = new TypeArgumentsContext(this.context, this.state);
        this.enterRule(localContext, 242, JavaParser.RULE_typeArguments);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1744;
            this.match(JavaParser.LT);
            this.state = 1745;
            this.typeArgument();
            this.state = 1750;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 85) {
                {
                {
                this.state = 1746;
                this.match(JavaParser.COMMA);
                this.state = 1747;
                this.typeArgument();
                }
                }
                this.state = 1752;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1753;
            this.match(JavaParser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public superSuffix(): SuperSuffixContext {
        let localContext = new SuperSuffixContext(this.context, this.state);
        this.enterRule(localContext, 244, JavaParser.RULE_superSuffix);
        let _la: number;
        try {
            this.state = 1764;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.LPAREN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1755;
                this.arguments();
                }
                break;
            case JavaParser.DOT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1756;
                this.match(JavaParser.DOT);
                this.state = 1758;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 89) {
                    {
                    this.state = 1757;
                    this.typeArguments();
                    }
                }

                this.state = 1760;
                this.identifier();
                this.state = 1762;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 217, this.context) ) {
                case 1:
                    {
                    this.state = 1761;
                    this.arguments();
                    }
                    break;
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
        let localContext = new ExplicitGenericInvocationSuffixContext(this.context, this.state);
        this.enterRule(localContext, 246, JavaParser.RULE_explicitGenericInvocationSuffix);
        try {
            this.state = 1771;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.SUPER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1766;
                this.match(JavaParser.SUPER);
                this.state = 1767;
                this.superSuffix();
                }
                break;
            case JavaParser.MODULE:
            case JavaParser.OPEN:
            case JavaParser.REQUIRES:
            case JavaParser.EXPORTS:
            case JavaParser.OPENS:
            case JavaParser.TO:
            case JavaParser.USES:
            case JavaParser.PROVIDES:
            case JavaParser.WITH:
            case JavaParser.TRANSITIVE:
            case JavaParser.VAR:
            case JavaParser.YIELD:
            case JavaParser.RECORD:
            case JavaParser.SEALED:
            case JavaParser.PERMITS:
            case JavaParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1768;
                this.identifier();
                this.state = 1769;
                this.arguments();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arguments(): ArgumentsContext {
        let localContext = new ArgumentsContext(this.context, this.state);
        this.enterRule(localContext, 248, JavaParser.RULE_arguments);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1773;
            this.match(JavaParser.LPAREN);
            this.state = 1775;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 3758082137) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2154824703) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 272629767) !== 0)) {
                {
                this.state = 1774;
                this.expressionList();
                }
            }

            this.state = 1777;
            this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 98:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        case 106:
            return this.guardedPattern_sempred(localContext as GuardedPatternContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 18);
        case 1:
            return this.precpred(this.context, 17);
        case 2:
            return this.precpred(this.context, 16);
        case 3:
            return this.precpred(this.context, 15);
        case 4:
            return this.precpred(this.context, 13);
        case 5:
            return this.precpred(this.context, 12);
        case 6:
            return this.precpred(this.context, 11);
        case 7:
            return this.precpred(this.context, 10);
        case 8:
            return this.precpred(this.context, 9);
        case 9:
            return this.precpred(this.context, 8);
        case 10:
            return this.precpred(this.context, 7);
        case 11:
            return this.precpred(this.context, 6);
        case 12:
            return this.precpred(this.context, 26);
        case 13:
            return this.precpred(this.context, 25);
        case 14:
            return this.precpred(this.context, 21);
        case 15:
            return this.precpred(this.context, 14);
        case 16:
            return this.precpred(this.context, 3);
        }
        return true;
    }
    private guardedPattern_sempred(localContext: GuardedPatternContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 17:
            return this.precpred(this.context, 1);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,129,1780,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
        2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,
        7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,1,0,3,0,252,
        8,0,1,0,5,0,255,8,0,10,0,12,0,258,9,0,1,0,5,0,261,8,0,10,0,12,0,
        264,9,0,1,0,1,0,1,0,1,0,3,0,270,8,0,1,1,5,1,273,8,1,10,1,12,1,276,
        9,1,1,1,1,1,1,1,1,1,1,2,1,2,3,2,284,8,2,1,2,1,2,1,2,3,2,289,8,2,
        1,2,1,2,1,3,5,3,294,8,3,10,3,12,3,297,9,3,1,3,1,3,1,3,1,3,1,3,3,
        3,304,8,3,1,3,3,3,307,8,3,1,4,1,4,1,4,1,4,1,4,3,4,314,8,4,1,5,1,
        5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,326,8,5,1,6,1,6,3,6,330,8,
        6,1,7,1,7,1,7,3,7,335,8,7,1,7,1,7,3,7,339,8,7,1,7,1,7,3,7,343,8,
        7,1,7,1,7,3,7,347,8,7,1,7,1,7,1,8,1,8,1,8,1,8,5,8,355,8,8,10,8,12,
        8,358,9,8,1,8,1,8,1,9,5,9,363,8,9,10,9,12,9,366,9,9,1,9,1,9,1,9,
        5,9,371,8,9,10,9,12,9,374,9,9,1,9,3,9,377,8,9,1,10,1,10,1,10,5,10,
        382,8,10,10,10,12,10,385,9,10,1,11,1,11,1,11,1,11,3,11,391,8,11,
        1,11,1,11,3,11,395,8,11,1,11,3,11,398,8,11,1,11,3,11,401,8,11,1,
        11,1,11,1,12,1,12,1,12,5,12,408,8,12,10,12,12,12,411,9,12,1,13,5,
        13,414,8,13,10,13,12,13,417,9,13,1,13,1,13,3,13,421,8,13,1,13,3,
        13,424,8,13,1,14,1,14,5,14,428,8,14,10,14,12,14,431,9,14,1,15,1,
        15,1,15,3,15,436,8,15,1,15,1,15,3,15,440,8,15,1,15,1,15,1,16,1,16,
        5,16,446,8,16,10,16,12,16,449,9,16,1,16,1,16,1,17,1,17,5,17,455,
        8,17,10,17,12,17,458,9,17,1,17,1,17,1,18,1,18,3,18,464,8,18,1,18,
        1,18,5,18,468,8,18,10,18,12,18,471,9,18,1,18,3,18,474,8,18,1,19,
        1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,487,8,19,
        1,20,1,20,1,20,1,20,1,20,5,20,494,8,20,10,20,12,20,497,9,20,1,20,
        1,20,3,20,501,8,20,1,20,1,20,1,21,5,21,506,8,21,10,21,12,21,509,
        9,21,1,21,1,21,1,21,1,21,1,21,5,21,516,8,21,10,21,12,21,519,9,21,
        1,21,1,21,3,21,523,8,21,1,21,1,21,1,22,1,22,1,22,3,22,530,8,22,1,
        23,1,23,3,23,534,8,23,1,24,1,24,1,24,1,25,1,25,1,25,1,26,1,26,1,
        26,1,26,3,26,546,8,26,1,26,1,26,1,27,1,27,1,27,1,27,1,28,5,28,555,
        8,28,10,28,12,28,558,9,28,1,28,1,28,3,28,562,8,28,1,29,1,29,1,29,
        1,29,1,29,1,29,1,29,1,29,3,29,572,8,29,1,30,1,30,1,30,1,30,5,30,
        578,8,30,10,30,12,30,581,9,30,1,30,1,30,1,31,1,31,1,31,5,31,588,
        8,31,10,31,12,31,591,9,31,1,31,1,31,1,31,1,32,5,32,597,8,32,10,32,
        12,32,600,9,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,3,33,610,
        8,33,1,34,5,34,613,8,34,10,34,12,34,616,9,34,1,34,1,34,1,34,1,35,
        5,35,622,8,35,10,35,12,35,625,9,35,1,35,1,35,1,35,1,35,1,35,5,35,
        632,8,35,10,35,12,35,635,9,35,1,35,1,35,3,35,639,8,35,1,35,1,35,
        1,36,1,36,1,36,5,36,646,8,36,10,36,12,36,649,9,36,1,37,1,37,1,37,
        3,37,654,8,37,1,38,1,38,1,38,5,38,659,8,38,10,38,12,38,662,9,38,
        1,39,1,39,3,39,666,8,39,1,40,1,40,1,40,1,40,5,40,672,8,40,10,40,
        12,40,675,9,40,1,40,3,40,678,8,40,3,40,680,8,40,1,40,1,40,1,41,1,
        41,3,41,686,8,41,1,41,1,41,1,41,3,41,691,8,41,5,41,693,8,41,10,41,
        12,41,696,9,41,1,42,1,42,5,42,700,8,42,10,42,12,42,703,9,42,1,42,
        1,42,1,42,3,42,708,8,42,3,42,710,8,42,1,43,1,43,1,43,5,43,715,8,
        43,10,43,12,43,718,9,43,1,44,1,44,3,44,722,8,44,1,44,1,44,1,44,3,
        44,727,8,44,1,44,3,44,730,8,44,3,44,732,8,44,1,44,1,44,1,45,1,45,
        1,45,1,45,5,45,740,8,45,10,45,12,45,743,9,45,1,45,1,45,1,46,1,46,
        1,46,5,46,750,8,46,10,46,12,46,753,9,46,1,46,1,46,3,46,757,8,46,
        1,46,3,46,760,8,46,1,47,5,47,763,8,47,10,47,12,47,766,9,47,1,47,
        1,47,1,47,1,48,5,48,772,8,48,10,48,12,48,775,9,48,1,48,1,48,5,48,
        779,8,48,10,48,12,48,782,9,48,1,48,1,48,1,48,1,49,1,49,1,49,5,49,
        790,8,49,10,49,12,49,793,9,49,1,50,5,50,796,8,50,10,50,12,50,799,
        9,50,1,50,1,50,1,50,1,51,1,51,1,51,5,51,807,8,51,10,51,12,51,810,
        9,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,3,52,819,8,52,1,53,1,53,
        1,54,1,54,1,55,1,55,1,55,5,55,828,8,55,10,55,12,55,831,9,55,1,55,
        1,55,1,55,1,56,1,56,1,56,3,56,839,8,56,1,56,1,56,1,56,3,56,844,8,
        56,1,56,3,56,847,8,56,1,57,1,57,1,57,5,57,852,8,57,10,57,12,57,855,
        9,57,1,58,1,58,1,58,1,58,1,59,1,59,1,59,3,59,864,8,59,1,60,1,60,
        1,60,1,60,5,60,870,8,60,10,60,12,60,873,9,60,3,60,875,8,60,1,60,
        3,60,878,8,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,1,62,1,62,5,62,
        889,8,62,10,62,12,62,892,9,62,1,62,1,62,1,63,5,63,897,8,63,10,63,
        12,63,900,9,63,1,63,1,63,3,63,904,8,63,1,64,1,64,1,64,1,64,1,64,
        1,64,3,64,912,8,64,1,64,1,64,3,64,916,8,64,1,64,1,64,3,64,920,8,
        64,1,64,1,64,3,64,924,8,64,1,64,1,64,3,64,928,8,64,3,64,930,8,64,
        1,65,1,65,3,65,934,8,65,1,66,1,66,1,66,1,66,3,66,940,8,66,1,67,1,
        67,1,68,1,68,1,68,1,69,3,69,948,8,69,1,69,1,69,1,69,1,69,1,70,1,
        70,5,70,956,8,70,10,70,12,70,959,9,70,1,70,1,70,1,71,1,71,5,71,965,
        8,71,10,71,12,71,968,9,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,3,71,
        977,8,71,1,71,1,71,1,71,1,71,1,71,1,71,3,71,985,8,71,1,71,1,71,1,
        71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,3,71,999,8,71,1,
        72,1,72,1,73,1,73,1,73,3,73,1006,8,73,1,73,1,73,1,73,3,73,1011,8,
        73,1,73,1,73,1,74,1,74,3,74,1017,8,74,1,74,1,74,1,75,1,75,1,75,5,
        75,1024,8,75,10,75,12,75,1027,9,75,1,76,1,76,1,76,1,77,1,77,5,77,
        1034,8,77,10,77,12,77,1037,9,77,1,77,1,77,1,78,1,78,5,78,1043,8,
        78,10,78,12,78,1046,9,78,1,78,1,78,1,79,1,79,1,79,1,79,1,79,3,79,
        1055,8,79,1,80,5,80,1058,8,80,10,80,12,80,1061,9,80,1,80,1,80,1,
        80,1,81,1,81,1,82,5,82,1069,8,82,10,82,12,82,1072,9,82,1,82,1,82,
        1,82,3,82,1077,8,82,1,82,3,82,1080,8,82,1,83,1,83,1,83,1,83,1,83,
        3,83,1087,8,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,3,83,1096,8,83,
        1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,
        1,83,1,83,1,83,1,83,1,83,1,83,4,83,1117,8,83,11,83,12,83,1118,1,
        83,3,83,1122,8,83,1,83,3,83,1125,8,83,1,83,1,83,1,83,1,83,5,83,1131,
        8,83,10,83,12,83,1134,9,83,1,83,3,83,1137,8,83,1,83,1,83,1,83,1,
        83,5,83,1143,8,83,10,83,12,83,1146,9,83,1,83,5,83,1149,8,83,10,83,
        12,83,1152,9,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,3,83,1162,
        8,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,3,83,1171,8,83,1,83,1,83,
        1,83,3,83,1176,8,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,
        1,83,1,83,3,83,1189,8,83,1,83,1,83,1,83,1,83,3,83,1195,8,83,1,84,
        1,84,1,84,5,84,1200,8,84,10,84,12,84,1203,9,84,1,84,1,84,1,84,1,
        84,1,84,1,85,1,85,1,85,5,85,1213,8,85,10,85,12,85,1216,9,85,1,86,
        1,86,1,86,1,87,1,87,1,87,3,87,1224,8,87,1,87,1,87,1,88,1,88,1,88,
        5,88,1231,8,88,10,88,12,88,1234,9,88,1,89,5,89,1237,8,89,10,89,12,
        89,1240,9,89,1,89,1,89,1,89,1,89,1,89,3,89,1247,8,89,1,89,1,89,1,
        89,1,89,3,89,1253,8,89,1,90,4,90,1256,8,90,11,90,12,90,1257,1,90,
        4,90,1261,8,90,11,90,12,90,1262,1,91,1,91,1,91,1,91,1,91,1,91,3,
        91,1271,8,91,1,91,1,91,1,91,3,91,1276,8,91,1,92,1,92,3,92,1280,8,
        92,1,92,1,92,3,92,1284,8,92,1,92,1,92,3,92,1288,8,92,3,92,1290,8,
        92,1,93,1,93,3,93,1294,8,93,1,94,5,94,1297,8,94,10,94,12,94,1300,
        9,94,1,94,1,94,3,94,1304,8,94,1,94,1,94,1,94,1,94,1,95,1,95,1,95,
        1,95,1,96,1,96,1,96,5,96,1317,8,96,10,96,12,96,1320,9,96,1,97,1,
        97,1,97,3,97,1325,8,97,1,97,1,97,1,97,1,97,1,97,3,97,1332,8,97,1,
        97,1,97,1,97,1,97,3,97,1338,8,97,1,97,3,97,1341,8,97,1,98,1,98,1,
        98,1,98,1,98,1,98,1,98,5,98,1350,8,98,10,98,12,98,1353,9,98,1,98,
        1,98,1,98,5,98,1358,8,98,10,98,12,98,1361,9,98,1,98,1,98,1,98,1,
        98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,3,98,1375,8,98,1,98,1,
        98,3,98,1379,8,98,1,98,1,98,1,98,3,98,1384,8,98,1,98,1,98,3,98,1388,
        8,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,
        1,98,1,98,3,98,1404,8,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,
        1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,
        1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,
        1,98,1,98,1,98,1,98,3,98,1444,8,98,1,98,1,98,1,98,1,98,3,98,1450,
        8,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,3,98,
        1463,8,98,1,98,1,98,1,98,3,98,1468,8,98,1,98,5,98,1471,8,98,10,98,
        12,98,1474,9,98,1,99,5,99,1477,8,99,10,99,12,99,1480,9,99,1,99,1,
        99,5,99,1484,8,99,10,99,12,99,1487,9,99,1,99,1,99,1,100,1,100,1,
        100,1,100,1,101,1,101,1,101,3,101,1498,8,101,1,101,1,101,1,101,1,
        101,1,101,5,101,1505,8,101,10,101,12,101,1508,9,101,1,101,1,101,
        1,101,1,101,3,101,1514,8,101,1,101,3,101,1517,8,101,1,102,1,102,
        3,102,1521,8,102,1,103,1,103,1,103,1,103,1,103,1,103,1,103,1,103,
        1,103,1,103,1,103,1,103,1,103,1,103,1,103,1,103,3,103,1539,8,103,
        3,103,1541,8,103,1,104,1,104,1,104,1,104,5,104,1547,8,104,10,104,
        12,104,1550,9,104,1,104,1,104,1,105,1,105,1,105,1,105,3,105,1558,
        8,105,1,105,1,105,1,105,1,105,1,105,3,105,1565,8,105,1,106,1,106,
        1,106,1,106,1,106,1,106,5,106,1573,8,106,10,106,12,106,1576,9,106,
        1,106,1,106,5,106,1580,8,106,10,106,12,106,1583,9,106,1,106,1,106,
        1,106,5,106,1588,8,106,10,106,12,106,1591,9,106,3,106,1593,8,106,
        1,106,1,106,1,106,5,106,1598,8,106,10,106,12,106,1601,9,106,1,107,
        1,107,5,107,1605,8,107,10,107,12,107,1608,9,107,3,107,1610,8,107,
        1,108,1,108,1,108,3,108,1615,8,108,1,108,5,108,1618,8,108,10,108,
        12,108,1621,9,108,1,108,1,108,3,108,1625,8,108,1,109,1,109,1,109,
        1,109,1,109,1,109,1,109,3,109,1634,8,109,3,109,1636,8,109,1,110,
        1,110,3,110,1640,8,110,1,110,1,110,1,110,3,110,1645,8,110,5,110,
        1647,8,110,10,110,12,110,1650,9,110,1,110,3,110,1653,8,110,1,111,
        1,111,3,111,1657,8,111,1,111,1,111,1,112,1,112,1,112,1,112,5,112,
        1665,8,112,10,112,12,112,1668,9,112,1,112,1,112,1,112,1,112,1,112,
        1,112,1,112,5,112,1677,8,112,10,112,12,112,1680,9,112,1,112,1,112,
        5,112,1684,8,112,10,112,12,112,1687,9,112,3,112,1689,8,112,1,113,
        1,113,3,113,1693,8,113,1,114,1,114,1,114,1,115,1,115,1,115,3,115,
        1701,8,115,1,116,1,116,1,116,3,116,1706,8,116,1,117,1,117,1,117,
        1,117,1,118,1,118,1,118,5,118,1715,8,118,10,118,12,118,1718,9,118,
        1,119,5,119,1721,8,119,10,119,12,119,1724,9,119,1,119,1,119,3,119,
        1728,8,119,1,119,5,119,1731,8,119,10,119,12,119,1734,9,119,1,119,
        1,119,5,119,1738,8,119,10,119,12,119,1741,9,119,1,120,1,120,1,121,
        1,121,1,121,1,121,5,121,1749,8,121,10,121,12,121,1752,9,121,1,121,
        1,121,1,122,1,122,1,122,3,122,1759,8,122,1,122,1,122,3,122,1763,
        8,122,3,122,1765,8,122,1,123,1,123,1,123,1,123,1,123,3,123,1772,
        8,123,1,124,1,124,3,124,1776,8,124,1,124,1,124,1,124,0,2,196,212,
        125,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
        44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,
        88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,
        124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,
        156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,
        188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,
        220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,0,15,
        2,0,17,17,40,40,1,0,67,70,1,0,71,72,2,0,38,38,60,60,2,0,51,65,129,
        129,1,0,100,103,1,0,90,91,2,0,104,105,109,109,1,0,102,103,2,0,88,
        89,95,96,2,0,94,94,97,97,2,0,87,87,110,120,1,0,100,101,2,0,93,93,
        121,121,8,0,3,3,5,5,8,8,14,14,20,20,27,27,29,29,37,37,1982,0,269,
        1,0,0,0,2,274,1,0,0,0,4,281,1,0,0,0,6,306,1,0,0,0,8,313,1,0,0,0,
        10,325,1,0,0,0,12,329,1,0,0,0,14,331,1,0,0,0,16,350,1,0,0,0,18,364,
        1,0,0,0,20,378,1,0,0,0,22,386,1,0,0,0,24,404,1,0,0,0,26,415,1,0,
        0,0,28,425,1,0,0,0,30,432,1,0,0,0,32,443,1,0,0,0,34,452,1,0,0,0,
        36,473,1,0,0,0,38,486,1,0,0,0,40,488,1,0,0,0,42,507,1,0,0,0,44,529,
        1,0,0,0,46,533,1,0,0,0,48,535,1,0,0,0,50,538,1,0,0,0,52,541,1,0,
        0,0,54,549,1,0,0,0,56,561,1,0,0,0,58,571,1,0,0,0,60,573,1,0,0,0,
        62,584,1,0,0,0,64,598,1,0,0,0,66,609,1,0,0,0,68,614,1,0,0,0,70,623,
        1,0,0,0,72,642,1,0,0,0,74,650,1,0,0,0,76,655,1,0,0,0,78,665,1,0,
        0,0,80,667,1,0,0,0,82,683,1,0,0,0,84,709,1,0,0,0,86,711,1,0,0,0,
        88,719,1,0,0,0,90,735,1,0,0,0,92,759,1,0,0,0,94,764,1,0,0,0,96,773,
        1,0,0,0,98,786,1,0,0,0,100,797,1,0,0,0,102,803,1,0,0,0,104,818,1,
        0,0,0,106,820,1,0,0,0,108,822,1,0,0,0,110,829,1,0,0,0,112,838,1,
        0,0,0,114,848,1,0,0,0,116,856,1,0,0,0,118,863,1,0,0,0,120,865,1,
        0,0,0,122,881,1,0,0,0,124,886,1,0,0,0,126,903,1,0,0,0,128,929,1,
        0,0,0,130,933,1,0,0,0,132,935,1,0,0,0,134,941,1,0,0,0,136,943,1,
        0,0,0,138,947,1,0,0,0,140,953,1,0,0,0,142,998,1,0,0,0,144,1000,1,
        0,0,0,146,1002,1,0,0,0,148,1014,1,0,0,0,150,1020,1,0,0,0,152,1028,
        1,0,0,0,154,1031,1,0,0,0,156,1040,1,0,0,0,158,1054,1,0,0,0,160,1059,
        1,0,0,0,162,1065,1,0,0,0,164,1079,1,0,0,0,166,1194,1,0,0,0,168,1196,
        1,0,0,0,170,1209,1,0,0,0,172,1217,1,0,0,0,174,1220,1,0,0,0,176,1227,
        1,0,0,0,178,1252,1,0,0,0,180,1255,1,0,0,0,182,1275,1,0,0,0,184,1289,
        1,0,0,0,186,1293,1,0,0,0,188,1298,1,0,0,0,190,1309,1,0,0,0,192,1313,
        1,0,0,0,194,1340,1,0,0,0,196,1387,1,0,0,0,198,1478,1,0,0,0,200,1490,
        1,0,0,0,202,1516,1,0,0,0,204,1520,1,0,0,0,206,1540,1,0,0,0,208,1542,
        1,0,0,0,210,1564,1,0,0,0,212,1592,1,0,0,0,214,1609,1,0,0,0,216,1614,
        1,0,0,0,218,1635,1,0,0,0,220,1652,1,0,0,0,222,1654,1,0,0,0,224,1660,
        1,0,0,0,226,1690,1,0,0,0,228,1694,1,0,0,0,230,1700,1,0,0,0,232,1705,
        1,0,0,0,234,1707,1,0,0,0,236,1711,1,0,0,0,238,1722,1,0,0,0,240,1742,
        1,0,0,0,242,1744,1,0,0,0,244,1764,1,0,0,0,246,1771,1,0,0,0,248,1773,
        1,0,0,0,250,252,3,2,1,0,251,250,1,0,0,0,251,252,1,0,0,0,252,256,
        1,0,0,0,253,255,3,4,2,0,254,253,1,0,0,0,255,258,1,0,0,0,256,254,
        1,0,0,0,256,257,1,0,0,0,257,262,1,0,0,0,258,256,1,0,0,0,259,261,
        3,6,3,0,260,259,1,0,0,0,261,264,1,0,0,0,262,260,1,0,0,0,262,263,
        1,0,0,0,263,265,1,0,0,0,264,262,1,0,0,0,265,270,5,0,0,1,266,267,
        3,138,69,0,267,268,5,0,0,1,268,270,1,0,0,0,269,251,1,0,0,0,269,266,
        1,0,0,0,270,1,1,0,0,0,271,273,3,112,56,0,272,271,1,0,0,0,273,276,
        1,0,0,0,274,272,1,0,0,0,274,275,1,0,0,0,275,277,1,0,0,0,276,274,
        1,0,0,0,277,278,5,32,0,0,278,279,3,102,51,0,279,280,5,84,0,0,280,
        3,1,0,0,0,281,283,5,25,0,0,282,284,5,38,0,0,283,282,1,0,0,0,283,
        284,1,0,0,0,284,285,1,0,0,0,285,288,3,102,51,0,286,287,5,86,0,0,
        287,289,5,104,0,0,288,286,1,0,0,0,288,289,1,0,0,0,289,290,1,0,0,
        0,290,291,5,84,0,0,291,5,1,0,0,0,292,294,3,10,5,0,293,292,1,0,0,
        0,294,297,1,0,0,0,295,293,1,0,0,0,295,296,1,0,0,0,296,303,1,0,0,
        0,297,295,1,0,0,0,298,304,3,14,7,0,299,304,3,22,11,0,300,304,3,30,
        15,0,301,304,3,122,61,0,302,304,3,146,73,0,303,298,1,0,0,0,303,299,
        1,0,0,0,303,300,1,0,0,0,303,301,1,0,0,0,303,302,1,0,0,0,304,307,
        1,0,0,0,305,307,5,84,0,0,306,295,1,0,0,0,306,305,1,0,0,0,307,7,1,
        0,0,0,308,314,3,10,5,0,309,314,5,30,0,0,310,314,5,42,0,0,311,314,
        5,46,0,0,312,314,5,49,0,0,313,308,1,0,0,0,313,309,1,0,0,0,313,310,
        1,0,0,0,313,311,1,0,0,0,313,312,1,0,0,0,314,9,1,0,0,0,315,326,3,
        112,56,0,316,326,5,35,0,0,317,326,5,34,0,0,318,326,5,33,0,0,319,
        326,5,38,0,0,320,326,5,1,0,0,321,326,5,18,0,0,322,326,5,39,0,0,323,
        326,5,64,0,0,324,326,5,66,0,0,325,315,1,0,0,0,325,316,1,0,0,0,325,
        317,1,0,0,0,325,318,1,0,0,0,325,319,1,0,0,0,325,320,1,0,0,0,325,
        321,1,0,0,0,325,322,1,0,0,0,325,323,1,0,0,0,325,324,1,0,0,0,326,
        11,1,0,0,0,327,330,5,18,0,0,328,330,3,112,56,0,329,327,1,0,0,0,329,
        328,1,0,0,0,330,13,1,0,0,0,331,332,5,9,0,0,332,334,3,162,81,0,333,
        335,3,16,8,0,334,333,1,0,0,0,334,335,1,0,0,0,335,338,1,0,0,0,336,
        337,5,17,0,0,337,339,3,238,119,0,338,336,1,0,0,0,338,339,1,0,0,0,
        339,342,1,0,0,0,340,341,5,24,0,0,341,343,3,236,118,0,342,340,1,0,
        0,0,342,343,1,0,0,0,343,346,1,0,0,0,344,345,5,65,0,0,345,347,3,236,
        118,0,346,344,1,0,0,0,346,347,1,0,0,0,347,348,1,0,0,0,348,349,3,
        32,16,0,349,15,1,0,0,0,350,351,5,89,0,0,351,356,3,18,9,0,352,353,
        5,85,0,0,353,355,3,18,9,0,354,352,1,0,0,0,355,358,1,0,0,0,356,354,
        1,0,0,0,356,357,1,0,0,0,357,359,1,0,0,0,358,356,1,0,0,0,359,360,
        5,88,0,0,360,17,1,0,0,0,361,363,3,112,56,0,362,361,1,0,0,0,363,366,
        1,0,0,0,364,362,1,0,0,0,364,365,1,0,0,0,365,367,1,0,0,0,366,364,
        1,0,0,0,367,376,3,162,81,0,368,372,5,17,0,0,369,371,3,112,56,0,370,
        369,1,0,0,0,371,374,1,0,0,0,372,370,1,0,0,0,372,373,1,0,0,0,373,
        375,1,0,0,0,374,372,1,0,0,0,375,377,3,20,10,0,376,368,1,0,0,0,376,
        377,1,0,0,0,377,19,1,0,0,0,378,383,3,238,119,0,379,380,5,106,0,0,
        380,382,3,238,119,0,381,379,1,0,0,0,382,385,1,0,0,0,383,381,1,0,
        0,0,383,384,1,0,0,0,384,21,1,0,0,0,385,383,1,0,0,0,386,387,5,16,
        0,0,387,390,3,162,81,0,388,389,5,24,0,0,389,391,3,236,118,0,390,
        388,1,0,0,0,390,391,1,0,0,0,391,392,1,0,0,0,392,394,5,80,0,0,393,
        395,3,24,12,0,394,393,1,0,0,0,394,395,1,0,0,0,395,397,1,0,0,0,396,
        398,5,85,0,0,397,396,1,0,0,0,397,398,1,0,0,0,398,400,1,0,0,0,399,
        401,3,28,14,0,400,399,1,0,0,0,400,401,1,0,0,0,401,402,1,0,0,0,402,
        403,5,81,0,0,403,23,1,0,0,0,404,409,3,26,13,0,405,406,5,85,0,0,406,
        408,3,26,13,0,407,405,1,0,0,0,408,411,1,0,0,0,409,407,1,0,0,0,409,
        410,1,0,0,0,410,25,1,0,0,0,411,409,1,0,0,0,412,414,3,112,56,0,413,
        412,1,0,0,0,414,417,1,0,0,0,415,413,1,0,0,0,415,416,1,0,0,0,416,
        418,1,0,0,0,417,415,1,0,0,0,418,420,3,162,81,0,419,421,3,248,124,
        0,420,419,1,0,0,0,420,421,1,0,0,0,421,423,1,0,0,0,422,424,3,32,16,
        0,423,422,1,0,0,0,423,424,1,0,0,0,424,27,1,0,0,0,425,429,5,84,0,
        0,426,428,3,36,18,0,427,426,1,0,0,0,428,431,1,0,0,0,429,427,1,0,
        0,0,429,430,1,0,0,0,430,29,1,0,0,0,431,429,1,0,0,0,432,433,5,28,
        0,0,433,435,3,162,81,0,434,436,3,16,8,0,435,434,1,0,0,0,435,436,
        1,0,0,0,436,439,1,0,0,0,437,438,5,17,0,0,438,440,3,236,118,0,439,
        437,1,0,0,0,439,440,1,0,0,0,440,441,1,0,0,0,441,442,3,34,17,0,442,
        31,1,0,0,0,443,447,5,80,0,0,444,446,3,36,18,0,445,444,1,0,0,0,446,
        449,1,0,0,0,447,445,1,0,0,0,447,448,1,0,0,0,448,450,1,0,0,0,449,
        447,1,0,0,0,450,451,5,81,0,0,451,33,1,0,0,0,452,456,5,80,0,0,453,
        455,3,56,28,0,454,453,1,0,0,0,455,458,1,0,0,0,456,454,1,0,0,0,456,
        457,1,0,0,0,457,459,1,0,0,0,458,456,1,0,0,0,459,460,5,81,0,0,460,
        35,1,0,0,0,461,474,5,84,0,0,462,464,5,38,0,0,463,462,1,0,0,0,463,
        464,1,0,0,0,464,465,1,0,0,0,465,474,3,156,78,0,466,468,3,8,4,0,467,
        466,1,0,0,0,468,471,1,0,0,0,469,467,1,0,0,0,469,470,1,0,0,0,470,
        472,1,0,0,0,471,469,1,0,0,0,472,474,3,38,19,0,473,461,1,0,0,0,473,
        463,1,0,0,0,473,469,1,0,0,0,474,37,1,0,0,0,475,487,3,40,20,0,476,
        487,3,48,24,0,477,487,3,54,27,0,478,487,3,52,26,0,479,487,3,50,25,
        0,480,487,3,30,15,0,481,487,3,122,61,0,482,487,3,14,7,0,483,487,
        3,22,11,0,484,487,3,146,73,0,485,487,3,42,21,0,486,475,1,0,0,0,486,
        476,1,0,0,0,486,477,1,0,0,0,486,478,1,0,0,0,486,479,1,0,0,0,486,
        480,1,0,0,0,486,481,1,0,0,0,486,482,1,0,0,0,486,483,1,0,0,0,486,
        484,1,0,0,0,486,485,1,0,0,0,487,39,1,0,0,0,488,489,3,46,23,0,489,
        490,3,162,81,0,490,495,3,88,44,0,491,492,5,82,0,0,492,494,5,83,0,
        0,493,491,1,0,0,0,494,497,1,0,0,0,495,493,1,0,0,0,495,496,1,0,0,
        0,496,500,1,0,0,0,497,495,1,0,0,0,498,499,5,45,0,0,499,501,3,86,
        43,0,500,498,1,0,0,0,500,501,1,0,0,0,501,502,1,0,0,0,502,503,3,44,
        22,0,503,41,1,0,0,0,504,506,3,8,4,0,505,504,1,0,0,0,506,509,1,0,
        0,0,507,505,1,0,0,0,507,508,1,0,0,0,508,510,1,0,0,0,509,507,1,0,
        0,0,510,511,3,46,23,0,511,512,3,162,81,0,512,517,3,88,44,0,513,514,
        5,82,0,0,514,516,5,83,0,0,515,513,1,0,0,0,516,519,1,0,0,0,517,515,
        1,0,0,0,517,518,1,0,0,0,518,522,1,0,0,0,519,517,1,0,0,0,520,521,
        5,45,0,0,521,523,3,86,43,0,522,520,1,0,0,0,522,523,1,0,0,0,523,524,
        1,0,0,0,524,525,5,126,0,0,525,43,1,0,0,0,526,530,3,156,78,0,527,
        530,5,126,0,0,528,530,5,84,0,0,529,526,1,0,0,0,529,527,1,0,0,0,529,
        528,1,0,0,0,530,45,1,0,0,0,531,534,3,238,119,0,532,534,5,48,0,0,
        533,531,1,0,0,0,533,532,1,0,0,0,534,47,1,0,0,0,535,536,3,16,8,0,
        536,537,3,40,20,0,537,49,1,0,0,0,538,539,3,16,8,0,539,540,3,52,26,
        0,540,51,1,0,0,0,541,542,3,162,81,0,542,545,3,88,44,0,543,544,5,
        45,0,0,544,546,3,86,43,0,545,543,1,0,0,0,545,546,1,0,0,0,546,547,
        1,0,0,0,547,548,3,156,78,0,548,53,1,0,0,0,549,550,3,238,119,0,550,
        551,3,72,36,0,551,552,5,84,0,0,552,55,1,0,0,0,553,555,3,8,4,0,554,
        553,1,0,0,0,555,558,1,0,0,0,556,554,1,0,0,0,556,557,1,0,0,0,557,
        559,1,0,0,0,558,556,1,0,0,0,559,562,3,58,29,0,560,562,5,84,0,0,561,
        556,1,0,0,0,561,560,1,0,0,0,562,57,1,0,0,0,563,572,3,60,30,0,564,
        572,3,64,32,0,565,572,3,68,34,0,566,572,3,30,15,0,567,572,3,122,
        61,0,568,572,3,14,7,0,569,572,3,22,11,0,570,572,3,146,73,0,571,563,
        1,0,0,0,571,564,1,0,0,0,571,565,1,0,0,0,571,566,1,0,0,0,571,567,
        1,0,0,0,571,568,1,0,0,0,571,569,1,0,0,0,571,570,1,0,0,0,572,59,1,
        0,0,0,573,574,3,238,119,0,574,579,3,62,31,0,575,576,5,85,0,0,576,
        578,3,62,31,0,577,575,1,0,0,0,578,581,1,0,0,0,579,577,1,0,0,0,579,
        580,1,0,0,0,580,582,1,0,0,0,581,579,1,0,0,0,582,583,5,84,0,0,583,
        61,1,0,0,0,584,589,3,162,81,0,585,586,5,82,0,0,586,588,5,83,0,0,
        587,585,1,0,0,0,588,591,1,0,0,0,589,587,1,0,0,0,589,590,1,0,0,0,
        590,592,1,0,0,0,591,589,1,0,0,0,592,593,5,87,0,0,593,594,3,78,39,
        0,594,63,1,0,0,0,595,597,3,66,33,0,596,595,1,0,0,0,597,600,1,0,0,
        0,598,596,1,0,0,0,598,599,1,0,0,0,599,601,1,0,0,0,600,598,1,0,0,
        0,601,602,3,70,35,0,602,65,1,0,0,0,603,610,3,112,56,0,604,610,5,
        35,0,0,605,610,5,1,0,0,606,610,5,12,0,0,607,610,5,38,0,0,608,610,
        5,39,0,0,609,603,1,0,0,0,609,604,1,0,0,0,609,605,1,0,0,0,609,606,
        1,0,0,0,609,607,1,0,0,0,609,608,1,0,0,0,610,67,1,0,0,0,611,613,3,
        66,33,0,612,611,1,0,0,0,613,616,1,0,0,0,614,612,1,0,0,0,614,615,
        1,0,0,0,615,617,1,0,0,0,616,614,1,0,0,0,617,618,3,16,8,0,618,619,
        3,70,35,0,619,69,1,0,0,0,620,622,3,112,56,0,621,620,1,0,0,0,622,
        625,1,0,0,0,623,621,1,0,0,0,623,624,1,0,0,0,624,626,1,0,0,0,625,
        623,1,0,0,0,626,627,3,46,23,0,627,628,3,162,81,0,628,633,3,88,44,
        0,629,630,5,82,0,0,630,632,5,83,0,0,631,629,1,0,0,0,632,635,1,0,
        0,0,633,631,1,0,0,0,633,634,1,0,0,0,634,638,1,0,0,0,635,633,1,0,
        0,0,636,637,5,45,0,0,637,639,3,86,43,0,638,636,1,0,0,0,638,639,1,
        0,0,0,639,640,1,0,0,0,640,641,3,44,22,0,641,71,1,0,0,0,642,647,3,
        74,37,0,643,644,5,85,0,0,644,646,3,74,37,0,645,643,1,0,0,0,646,649,
        1,0,0,0,647,645,1,0,0,0,647,648,1,0,0,0,648,73,1,0,0,0,649,647,1,
        0,0,0,650,653,3,76,38,0,651,652,5,87,0,0,652,654,3,78,39,0,653,651,
        1,0,0,0,653,654,1,0,0,0,654,75,1,0,0,0,655,660,3,162,81,0,656,657,
        5,82,0,0,657,659,5,83,0,0,658,656,1,0,0,0,659,662,1,0,0,0,660,658,
        1,0,0,0,660,661,1,0,0,0,661,77,1,0,0,0,662,660,1,0,0,0,663,666,3,
        80,40,0,664,666,3,196,98,0,665,663,1,0,0,0,665,664,1,0,0,0,666,79,
        1,0,0,0,667,679,5,80,0,0,668,673,3,78,39,0,669,670,5,85,0,0,670,
        672,3,78,39,0,671,669,1,0,0,0,672,675,1,0,0,0,673,671,1,0,0,0,673,
        674,1,0,0,0,674,677,1,0,0,0,675,673,1,0,0,0,676,678,5,85,0,0,677,
        676,1,0,0,0,677,678,1,0,0,0,678,680,1,0,0,0,679,668,1,0,0,0,679,
        680,1,0,0,0,680,681,1,0,0,0,681,682,5,81,0,0,682,81,1,0,0,0,683,
        685,3,162,81,0,684,686,3,242,121,0,685,684,1,0,0,0,685,686,1,0,0,
        0,686,694,1,0,0,0,687,688,5,86,0,0,688,690,3,162,81,0,689,691,3,
        242,121,0,690,689,1,0,0,0,690,691,1,0,0,0,691,693,1,0,0,0,692,687,
        1,0,0,0,693,696,1,0,0,0,694,692,1,0,0,0,694,695,1,0,0,0,695,83,1,
        0,0,0,696,694,1,0,0,0,697,710,3,238,119,0,698,700,3,112,56,0,699,
        698,1,0,0,0,700,703,1,0,0,0,701,699,1,0,0,0,701,702,1,0,0,0,702,
        704,1,0,0,0,703,701,1,0,0,0,704,707,5,92,0,0,705,706,7,0,0,0,706,
        708,3,238,119,0,707,705,1,0,0,0,707,708,1,0,0,0,708,710,1,0,0,0,
        709,697,1,0,0,0,709,701,1,0,0,0,710,85,1,0,0,0,711,716,3,102,51,
        0,712,713,5,85,0,0,713,715,3,102,51,0,714,712,1,0,0,0,715,718,1,
        0,0,0,716,714,1,0,0,0,716,717,1,0,0,0,717,87,1,0,0,0,718,716,1,0,
        0,0,719,731,5,78,0,0,720,722,3,90,45,0,721,720,1,0,0,0,721,722,1,
        0,0,0,722,732,1,0,0,0,723,726,3,90,45,0,724,725,5,85,0,0,725,727,
        3,92,46,0,726,724,1,0,0,0,726,727,1,0,0,0,727,732,1,0,0,0,728,730,
        3,92,46,0,729,728,1,0,0,0,729,730,1,0,0,0,730,732,1,0,0,0,731,721,
        1,0,0,0,731,723,1,0,0,0,731,729,1,0,0,0,732,733,1,0,0,0,733,734,
        5,79,0,0,734,89,1,0,0,0,735,741,3,238,119,0,736,737,3,162,81,0,737,
        738,5,86,0,0,738,740,1,0,0,0,739,736,1,0,0,0,740,743,1,0,0,0,741,
        739,1,0,0,0,741,742,1,0,0,0,742,744,1,0,0,0,743,741,1,0,0,0,744,
        745,5,43,0,0,745,91,1,0,0,0,746,751,3,94,47,0,747,748,5,85,0,0,748,
        750,3,94,47,0,749,747,1,0,0,0,750,753,1,0,0,0,751,749,1,0,0,0,751,
        752,1,0,0,0,752,756,1,0,0,0,753,751,1,0,0,0,754,755,5,85,0,0,755,
        757,3,96,48,0,756,754,1,0,0,0,756,757,1,0,0,0,757,760,1,0,0,0,758,
        760,3,96,48,0,759,746,1,0,0,0,759,758,1,0,0,0,760,93,1,0,0,0,761,
        763,3,12,6,0,762,761,1,0,0,0,763,766,1,0,0,0,764,762,1,0,0,0,764,
        765,1,0,0,0,765,767,1,0,0,0,766,764,1,0,0,0,767,768,3,238,119,0,
        768,769,3,76,38,0,769,95,1,0,0,0,770,772,3,12,6,0,771,770,1,0,0,
        0,772,775,1,0,0,0,773,771,1,0,0,0,773,774,1,0,0,0,774,776,1,0,0,
        0,775,773,1,0,0,0,776,780,3,238,119,0,777,779,3,112,56,0,778,777,
        1,0,0,0,779,782,1,0,0,0,780,778,1,0,0,0,780,781,1,0,0,0,781,783,
        1,0,0,0,782,780,1,0,0,0,783,784,5,124,0,0,784,785,3,76,38,0,785,
        97,1,0,0,0,786,791,3,100,50,0,787,788,5,85,0,0,788,790,3,100,50,
        0,789,787,1,0,0,0,790,793,1,0,0,0,791,789,1,0,0,0,791,792,1,0,0,
        0,792,99,1,0,0,0,793,791,1,0,0,0,794,796,3,12,6,0,795,794,1,0,0,
        0,796,799,1,0,0,0,797,795,1,0,0,0,797,798,1,0,0,0,798,800,1,0,0,
        0,799,797,1,0,0,0,800,801,5,61,0,0,801,802,3,162,81,0,802,101,1,
        0,0,0,803,808,3,162,81,0,804,805,5,86,0,0,805,807,3,162,81,0,806,
        804,1,0,0,0,807,810,1,0,0,0,808,806,1,0,0,0,808,809,1,0,0,0,809,
        103,1,0,0,0,810,808,1,0,0,0,811,819,3,106,53,0,812,819,3,108,54,
        0,813,819,5,74,0,0,814,819,5,75,0,0,815,819,5,73,0,0,816,819,5,77,
        0,0,817,819,5,76,0,0,818,811,1,0,0,0,818,812,1,0,0,0,818,813,1,0,
        0,0,818,814,1,0,0,0,818,815,1,0,0,0,818,816,1,0,0,0,818,817,1,0,
        0,0,819,105,1,0,0,0,820,821,7,1,0,0,821,107,1,0,0,0,822,823,7,2,
        0,0,823,109,1,0,0,0,824,825,3,162,81,0,825,826,5,86,0,0,826,828,
        1,0,0,0,827,824,1,0,0,0,828,831,1,0,0,0,829,827,1,0,0,0,829,830,
        1,0,0,0,830,832,1,0,0,0,831,829,1,0,0,0,832,833,5,123,0,0,833,834,
        3,162,81,0,834,111,1,0,0,0,835,836,5,123,0,0,836,839,3,102,51,0,
        837,839,3,110,55,0,838,835,1,0,0,0,838,837,1,0,0,0,839,846,1,0,0,
        0,840,843,5,78,0,0,841,844,3,114,57,0,842,844,3,118,59,0,843,841,
        1,0,0,0,843,842,1,0,0,0,843,844,1,0,0,0,844,845,1,0,0,0,845,847,
        5,79,0,0,846,840,1,0,0,0,846,847,1,0,0,0,847,113,1,0,0,0,848,853,
        3,116,58,0,849,850,5,85,0,0,850,852,3,116,58,0,851,849,1,0,0,0,852,
        855,1,0,0,0,853,851,1,0,0,0,853,854,1,0,0,0,854,115,1,0,0,0,855,
        853,1,0,0,0,856,857,3,162,81,0,857,858,5,87,0,0,858,859,3,118,59,
        0,859,117,1,0,0,0,860,864,3,196,98,0,861,864,3,112,56,0,862,864,
        3,120,60,0,863,860,1,0,0,0,863,861,1,0,0,0,863,862,1,0,0,0,864,119,
        1,0,0,0,865,874,5,80,0,0,866,871,3,118,59,0,867,868,5,85,0,0,868,
        870,3,118,59,0,869,867,1,0,0,0,870,873,1,0,0,0,871,869,1,0,0,0,871,
        872,1,0,0,0,872,875,1,0,0,0,873,871,1,0,0,0,874,866,1,0,0,0,874,
        875,1,0,0,0,875,877,1,0,0,0,876,878,5,85,0,0,877,876,1,0,0,0,877,
        878,1,0,0,0,878,879,1,0,0,0,879,880,5,81,0,0,880,121,1,0,0,0,881,
        882,5,123,0,0,882,883,5,28,0,0,883,884,3,162,81,0,884,885,3,124,
        62,0,885,123,1,0,0,0,886,890,5,80,0,0,887,889,3,126,63,0,888,887,
        1,0,0,0,889,892,1,0,0,0,890,888,1,0,0,0,890,891,1,0,0,0,891,893,
        1,0,0,0,892,890,1,0,0,0,893,894,5,81,0,0,894,125,1,0,0,0,895,897,
        3,8,4,0,896,895,1,0,0,0,897,900,1,0,0,0,898,896,1,0,0,0,898,899,
        1,0,0,0,899,901,1,0,0,0,900,898,1,0,0,0,901,904,3,128,64,0,902,904,
        5,84,0,0,903,898,1,0,0,0,903,902,1,0,0,0,904,127,1,0,0,0,905,906,
        3,238,119,0,906,907,3,130,65,0,907,908,5,84,0,0,908,930,1,0,0,0,
        909,911,3,14,7,0,910,912,5,84,0,0,911,910,1,0,0,0,911,912,1,0,0,
        0,912,930,1,0,0,0,913,915,3,30,15,0,914,916,5,84,0,0,915,914,1,0,
        0,0,915,916,1,0,0,0,916,930,1,0,0,0,917,919,3,22,11,0,918,920,5,
        84,0,0,919,918,1,0,0,0,919,920,1,0,0,0,920,930,1,0,0,0,921,923,3,
        122,61,0,922,924,5,84,0,0,923,922,1,0,0,0,923,924,1,0,0,0,924,930,
        1,0,0,0,925,927,3,146,73,0,926,928,5,84,0,0,927,926,1,0,0,0,927,
        928,1,0,0,0,928,930,1,0,0,0,929,905,1,0,0,0,929,909,1,0,0,0,929,
        913,1,0,0,0,929,917,1,0,0,0,929,921,1,0,0,0,929,925,1,0,0,0,930,
        129,1,0,0,0,931,934,3,132,66,0,932,934,3,134,67,0,933,931,1,0,0,
        0,933,932,1,0,0,0,934,131,1,0,0,0,935,936,3,162,81,0,936,937,5,78,
        0,0,937,939,5,79,0,0,938,940,3,136,68,0,939,938,1,0,0,0,939,940,
        1,0,0,0,940,133,1,0,0,0,941,942,3,72,36,0,942,135,1,0,0,0,943,944,
        5,12,0,0,944,945,3,118,59,0,945,137,1,0,0,0,946,948,5,52,0,0,947,
        946,1,0,0,0,947,948,1,0,0,0,948,949,1,0,0,0,949,950,5,51,0,0,950,
        951,3,102,51,0,951,952,3,140,70,0,952,139,1,0,0,0,953,957,5,80,0,
        0,954,956,3,142,71,0,955,954,1,0,0,0,956,959,1,0,0,0,957,955,1,0,
        0,0,957,958,1,0,0,0,958,960,1,0,0,0,959,957,1,0,0,0,960,961,5,81,
        0,0,961,141,1,0,0,0,962,966,5,53,0,0,963,965,3,144,72,0,964,963,
        1,0,0,0,965,968,1,0,0,0,966,964,1,0,0,0,966,967,1,0,0,0,967,969,
        1,0,0,0,968,966,1,0,0,0,969,970,3,102,51,0,970,971,5,84,0,0,971,
        999,1,0,0,0,972,973,5,54,0,0,973,976,3,102,51,0,974,975,5,56,0,0,
        975,977,3,102,51,0,976,974,1,0,0,0,976,977,1,0,0,0,977,978,1,0,0,
        0,978,979,5,84,0,0,979,999,1,0,0,0,980,981,5,55,0,0,981,984,3,102,
        51,0,982,983,5,56,0,0,983,985,3,102,51,0,984,982,1,0,0,0,984,985,
        1,0,0,0,985,986,1,0,0,0,986,987,5,84,0,0,987,999,1,0,0,0,988,989,
        5,57,0,0,989,990,3,102,51,0,990,991,5,84,0,0,991,999,1,0,0,0,992,
        993,5,58,0,0,993,994,3,102,51,0,994,995,5,59,0,0,995,996,3,102,51,
        0,996,997,5,84,0,0,997,999,1,0,0,0,998,962,1,0,0,0,998,972,1,0,0,
        0,998,980,1,0,0,0,998,988,1,0,0,0,998,992,1,0,0,0,999,143,1,0,0,
        0,1000,1001,7,3,0,0,1001,145,1,0,0,0,1002,1003,5,63,0,0,1003,1005,
        3,162,81,0,1004,1006,3,16,8,0,1005,1004,1,0,0,0,1005,1006,1,0,0,
        0,1006,1007,1,0,0,0,1007,1010,3,148,74,0,1008,1009,5,24,0,0,1009,
        1011,3,236,118,0,1010,1008,1,0,0,0,1010,1011,1,0,0,0,1011,1012,1,
        0,0,0,1012,1013,3,154,77,0,1013,147,1,0,0,0,1014,1016,5,78,0,0,1015,
        1017,3,150,75,0,1016,1015,1,0,0,0,1016,1017,1,0,0,0,1017,1018,1,
        0,0,0,1018,1019,5,79,0,0,1019,149,1,0,0,0,1020,1025,3,152,76,0,1021,
        1022,5,85,0,0,1022,1024,3,152,76,0,1023,1021,1,0,0,0,1024,1027,1,
        0,0,0,1025,1023,1,0,0,0,1025,1026,1,0,0,0,1026,151,1,0,0,0,1027,
        1025,1,0,0,0,1028,1029,3,238,119,0,1029,1030,3,162,81,0,1030,153,
        1,0,0,0,1031,1035,5,80,0,0,1032,1034,3,36,18,0,1033,1032,1,0,0,0,
        1034,1037,1,0,0,0,1035,1033,1,0,0,0,1035,1036,1,0,0,0,1036,1038,
        1,0,0,0,1037,1035,1,0,0,0,1038,1039,5,81,0,0,1039,155,1,0,0,0,1040,
        1044,5,80,0,0,1041,1043,3,158,79,0,1042,1041,1,0,0,0,1043,1046,1,
        0,0,0,1044,1042,1,0,0,0,1044,1045,1,0,0,0,1045,1047,1,0,0,0,1046,
        1044,1,0,0,0,1047,1048,5,81,0,0,1048,157,1,0,0,0,1049,1050,3,160,
        80,0,1050,1051,5,84,0,0,1051,1055,1,0,0,0,1052,1055,3,166,83,0,1053,
        1055,3,164,82,0,1054,1049,1,0,0,0,1054,1052,1,0,0,0,1054,1053,1,
        0,0,0,1055,159,1,0,0,0,1056,1058,3,12,6,0,1057,1056,1,0,0,0,1058,
        1061,1,0,0,0,1059,1057,1,0,0,0,1059,1060,1,0,0,0,1060,1062,1,0,0,
        0,1061,1059,1,0,0,0,1062,1063,3,238,119,0,1063,1064,3,72,36,0,1064,
        161,1,0,0,0,1065,1066,7,4,0,0,1066,163,1,0,0,0,1067,1069,3,10,5,
        0,1068,1067,1,0,0,0,1069,1072,1,0,0,0,1070,1068,1,0,0,0,1070,1071,
        1,0,0,0,1071,1076,1,0,0,0,1072,1070,1,0,0,0,1073,1077,3,14,7,0,1074,
        1077,3,30,15,0,1075,1077,3,146,73,0,1076,1073,1,0,0,0,1076,1074,
        1,0,0,0,1076,1075,1,0,0,0,1077,1080,1,0,0,0,1078,1080,5,84,0,0,1079,
        1070,1,0,0,0,1079,1078,1,0,0,0,1080,165,1,0,0,0,1081,1195,3,156,
        78,0,1082,1083,5,2,0,0,1083,1086,3,196,98,0,1084,1085,5,93,0,0,1085,
        1087,3,196,98,0,1086,1084,1,0,0,0,1086,1087,1,0,0,0,1087,1088,1,
        0,0,0,1088,1089,5,84,0,0,1089,1195,1,0,0,0,1090,1091,5,22,0,0,1091,
        1092,3,190,95,0,1092,1095,3,166,83,0,1093,1094,5,15,0,0,1094,1096,
        3,166,83,0,1095,1093,1,0,0,0,1095,1096,1,0,0,0,1096,1195,1,0,0,0,
        1097,1098,5,21,0,0,1098,1099,5,78,0,0,1099,1100,3,184,92,0,1100,
        1101,5,79,0,0,1101,1102,3,166,83,0,1102,1195,1,0,0,0,1103,1104,5,
        50,0,0,1104,1105,3,190,95,0,1105,1106,3,166,83,0,1106,1195,1,0,0,
        0,1107,1108,5,13,0,0,1108,1109,3,166,83,0,1109,1110,5,50,0,0,1110,
        1111,3,190,95,0,1111,1112,5,84,0,0,1112,1195,1,0,0,0,1113,1114,5,
        47,0,0,1114,1124,3,156,78,0,1115,1117,3,168,84,0,1116,1115,1,0,0,
        0,1117,1118,1,0,0,0,1118,1116,1,0,0,0,1118,1119,1,0,0,0,1119,1121,
        1,0,0,0,1120,1122,3,172,86,0,1121,1120,1,0,0,0,1121,1122,1,0,0,0,
        1122,1125,1,0,0,0,1123,1125,3,172,86,0,1124,1116,1,0,0,0,1124,1123,
        1,0,0,0,1125,1195,1,0,0,0,1126,1127,5,47,0,0,1127,1128,3,174,87,
        0,1128,1132,3,156,78,0,1129,1131,3,168,84,0,1130,1129,1,0,0,0,1131,
        1134,1,0,0,0,1132,1130,1,0,0,0,1132,1133,1,0,0,0,1133,1136,1,0,0,
        0,1134,1132,1,0,0,0,1135,1137,3,172,86,0,1136,1135,1,0,0,0,1136,
        1137,1,0,0,0,1137,1195,1,0,0,0,1138,1139,5,41,0,0,1139,1140,3,190,
        95,0,1140,1144,5,80,0,0,1141,1143,3,180,90,0,1142,1141,1,0,0,0,1143,
        1146,1,0,0,0,1144,1142,1,0,0,0,1144,1145,1,0,0,0,1145,1150,1,0,0,
        0,1146,1144,1,0,0,0,1147,1149,3,182,91,0,1148,1147,1,0,0,0,1149,
        1152,1,0,0,0,1150,1148,1,0,0,0,1150,1151,1,0,0,0,1151,1153,1,0,0,
        0,1152,1150,1,0,0,0,1153,1154,5,81,0,0,1154,1195,1,0,0,0,1155,1156,
        5,42,0,0,1156,1157,3,190,95,0,1157,1158,3,156,78,0,1158,1195,1,0,
        0,0,1159,1161,5,36,0,0,1160,1162,3,196,98,0,1161,1160,1,0,0,0,1161,
        1162,1,0,0,0,1162,1163,1,0,0,0,1163,1195,5,84,0,0,1164,1165,5,44,
        0,0,1165,1166,3,196,98,0,1166,1167,5,84,0,0,1167,1195,1,0,0,0,1168,
        1170,5,4,0,0,1169,1171,3,162,81,0,1170,1169,1,0,0,0,1170,1171,1,
        0,0,0,1171,1172,1,0,0,0,1172,1195,5,84,0,0,1173,1175,5,11,0,0,1174,
        1176,3,162,81,0,1175,1174,1,0,0,0,1175,1176,1,0,0,0,1176,1177,1,
        0,0,0,1177,1195,5,84,0,0,1178,1179,5,62,0,0,1179,1180,3,196,98,0,
        1180,1181,5,84,0,0,1181,1195,1,0,0,0,1182,1195,5,84,0,0,1183,1184,
        3,196,98,0,1184,1185,5,84,0,0,1185,1195,1,0,0,0,1186,1188,3,208,
        104,0,1187,1189,5,84,0,0,1188,1187,1,0,0,0,1188,1189,1,0,0,0,1189,
        1195,1,0,0,0,1190,1191,3,162,81,0,1191,1192,5,93,0,0,1192,1193,3,
        166,83,0,1193,1195,1,0,0,0,1194,1081,1,0,0,0,1194,1082,1,0,0,0,1194,
        1090,1,0,0,0,1194,1097,1,0,0,0,1194,1103,1,0,0,0,1194,1107,1,0,0,
        0,1194,1113,1,0,0,0,1194,1126,1,0,0,0,1194,1138,1,0,0,0,1194,1155,
        1,0,0,0,1194,1159,1,0,0,0,1194,1164,1,0,0,0,1194,1168,1,0,0,0,1194,
        1173,1,0,0,0,1194,1178,1,0,0,0,1194,1182,1,0,0,0,1194,1183,1,0,0,
        0,1194,1186,1,0,0,0,1194,1190,1,0,0,0,1195,167,1,0,0,0,1196,1197,
        5,7,0,0,1197,1201,5,78,0,0,1198,1200,3,12,6,0,1199,1198,1,0,0,0,
        1200,1203,1,0,0,0,1201,1199,1,0,0,0,1201,1202,1,0,0,0,1202,1204,
        1,0,0,0,1203,1201,1,0,0,0,1204,1205,3,170,85,0,1205,1206,3,162,81,
        0,1206,1207,5,79,0,0,1207,1208,3,156,78,0,1208,169,1,0,0,0,1209,
        1214,3,102,51,0,1210,1211,5,107,0,0,1211,1213,3,102,51,0,1212,1210,
        1,0,0,0,1213,1216,1,0,0,0,1214,1212,1,0,0,0,1214,1215,1,0,0,0,1215,
        171,1,0,0,0,1216,1214,1,0,0,0,1217,1218,5,19,0,0,1218,1219,3,156,
        78,0,1219,173,1,0,0,0,1220,1221,5,78,0,0,1221,1223,3,176,88,0,1222,
        1224,5,84,0,0,1223,1222,1,0,0,0,1223,1224,1,0,0,0,1224,1225,1,0,
        0,0,1225,1226,5,79,0,0,1226,175,1,0,0,0,1227,1232,3,178,89,0,1228,
        1229,5,84,0,0,1229,1231,3,178,89,0,1230,1228,1,0,0,0,1231,1234,1,
        0,0,0,1232,1230,1,0,0,0,1232,1233,1,0,0,0,1233,177,1,0,0,0,1234,
        1232,1,0,0,0,1235,1237,3,12,6,0,1236,1235,1,0,0,0,1237,1240,1,0,
        0,0,1238,1236,1,0,0,0,1238,1239,1,0,0,0,1239,1246,1,0,0,0,1240,1238,
        1,0,0,0,1241,1242,3,82,41,0,1242,1243,3,76,38,0,1243,1247,1,0,0,
        0,1244,1245,5,61,0,0,1245,1247,3,162,81,0,1246,1241,1,0,0,0,1246,
        1244,1,0,0,0,1247,1248,1,0,0,0,1248,1249,5,87,0,0,1249,1250,3,196,
        98,0,1250,1253,1,0,0,0,1251,1253,3,162,81,0,1252,1238,1,0,0,0,1252,
        1251,1,0,0,0,1253,179,1,0,0,0,1254,1256,3,182,91,0,1255,1254,1,0,
        0,0,1256,1257,1,0,0,0,1257,1255,1,0,0,0,1257,1258,1,0,0,0,1258,1260,
        1,0,0,0,1259,1261,3,158,79,0,1260,1259,1,0,0,0,1261,1262,1,0,0,0,
        1262,1260,1,0,0,0,1262,1263,1,0,0,0,1263,181,1,0,0,0,1264,1270,5,
        6,0,0,1265,1271,3,196,98,0,1266,1271,5,129,0,0,1267,1268,3,238,119,
        0,1268,1269,3,162,81,0,1269,1271,1,0,0,0,1270,1265,1,0,0,0,1270,
        1266,1,0,0,0,1270,1267,1,0,0,0,1271,1272,1,0,0,0,1272,1276,5,93,
        0,0,1273,1274,5,12,0,0,1274,1276,5,93,0,0,1275,1264,1,0,0,0,1275,
        1273,1,0,0,0,1276,183,1,0,0,0,1277,1290,3,188,94,0,1278,1280,3,186,
        93,0,1279,1278,1,0,0,0,1279,1280,1,0,0,0,1280,1281,1,0,0,0,1281,
        1283,5,84,0,0,1282,1284,3,196,98,0,1283,1282,1,0,0,0,1283,1284,1,
        0,0,0,1284,1285,1,0,0,0,1285,1287,5,84,0,0,1286,1288,3,192,96,0,
        1287,1286,1,0,0,0,1287,1288,1,0,0,0,1288,1290,1,0,0,0,1289,1277,
        1,0,0,0,1289,1279,1,0,0,0,1290,185,1,0,0,0,1291,1294,3,160,80,0,
        1292,1294,3,192,96,0,1293,1291,1,0,0,0,1293,1292,1,0,0,0,1294,187,
        1,0,0,0,1295,1297,3,12,6,0,1296,1295,1,0,0,0,1297,1300,1,0,0,0,1298,
        1296,1,0,0,0,1298,1299,1,0,0,0,1299,1303,1,0,0,0,1300,1298,1,0,0,
        0,1301,1304,3,238,119,0,1302,1304,5,61,0,0,1303,1301,1,0,0,0,1303,
        1302,1,0,0,0,1304,1305,1,0,0,0,1305,1306,3,76,38,0,1306,1307,5,93,
        0,0,1307,1308,3,196,98,0,1308,189,1,0,0,0,1309,1310,5,78,0,0,1310,
        1311,3,196,98,0,1311,1312,5,79,0,0,1312,191,1,0,0,0,1313,1318,3,
        196,98,0,1314,1315,5,85,0,0,1315,1317,3,196,98,0,1316,1314,1,0,0,
        0,1317,1320,1,0,0,0,1318,1316,1,0,0,0,1318,1319,1,0,0,0,1319,193,
        1,0,0,0,1320,1318,1,0,0,0,1321,1322,3,162,81,0,1322,1324,5,78,0,
        0,1323,1325,3,192,96,0,1324,1323,1,0,0,0,1324,1325,1,0,0,0,1325,
        1326,1,0,0,0,1326,1327,5,79,0,0,1327,1341,1,0,0,0,1328,1329,5,43,
        0,0,1329,1331,5,78,0,0,1330,1332,3,192,96,0,1331,1330,1,0,0,0,1331,
        1332,1,0,0,0,1332,1333,1,0,0,0,1333,1341,5,79,0,0,1334,1335,5,40,
        0,0,1335,1337,5,78,0,0,1336,1338,3,192,96,0,1337,1336,1,0,0,0,1337,
        1338,1,0,0,0,1338,1339,1,0,0,0,1339,1341,5,79,0,0,1340,1321,1,0,
        0,0,1340,1328,1,0,0,0,1340,1334,1,0,0,0,1341,195,1,0,0,0,1342,1343,
        6,98,-1,0,1343,1388,3,206,103,0,1344,1388,3,194,97,0,1345,1346,5,
        31,0,0,1346,1388,3,218,109,0,1347,1351,5,78,0,0,1348,1350,3,112,
        56,0,1349,1348,1,0,0,0,1350,1353,1,0,0,0,1351,1349,1,0,0,0,1351,
        1352,1,0,0,0,1352,1354,1,0,0,0,1353,1351,1,0,0,0,1354,1359,3,238,
        119,0,1355,1356,5,106,0,0,1356,1358,3,238,119,0,1357,1355,1,0,0,
        0,1358,1361,1,0,0,0,1359,1357,1,0,0,0,1359,1360,1,0,0,0,1360,1362,
        1,0,0,0,1361,1359,1,0,0,0,1362,1363,5,79,0,0,1363,1364,3,196,98,
        22,1364,1388,1,0,0,0,1365,1366,7,5,0,0,1366,1388,3,196,98,20,1367,
        1368,7,6,0,0,1368,1388,3,196,98,19,1369,1388,3,200,100,0,1370,1388,
        3,208,104,0,1371,1372,3,238,119,0,1372,1378,5,122,0,0,1373,1375,
        3,242,121,0,1374,1373,1,0,0,0,1374,1375,1,0,0,0,1375,1376,1,0,0,
        0,1376,1379,3,162,81,0,1377,1379,5,31,0,0,1378,1374,1,0,0,0,1378,
        1377,1,0,0,0,1379,1388,1,0,0,0,1380,1381,3,216,108,0,1381,1383,5,
        122,0,0,1382,1384,3,242,121,0,1383,1382,1,0,0,0,1383,1384,1,0,0,
        0,1384,1385,1,0,0,0,1385,1386,5,31,0,0,1386,1388,1,0,0,0,1387,1342,
        1,0,0,0,1387,1344,1,0,0,0,1387,1345,1,0,0,0,1387,1347,1,0,0,0,1387,
        1365,1,0,0,0,1387,1367,1,0,0,0,1387,1369,1,0,0,0,1387,1370,1,0,0,
        0,1387,1371,1,0,0,0,1387,1380,1,0,0,0,1388,1472,1,0,0,0,1389,1390,
        10,18,0,0,1390,1391,7,7,0,0,1391,1471,3,196,98,19,1392,1393,10,17,
        0,0,1393,1394,7,8,0,0,1394,1471,3,196,98,18,1395,1403,10,16,0,0,
        1396,1397,5,89,0,0,1397,1404,5,89,0,0,1398,1399,5,88,0,0,1399,1400,
        5,88,0,0,1400,1404,5,88,0,0,1401,1402,5,88,0,0,1402,1404,5,88,0,
        0,1403,1396,1,0,0,0,1403,1398,1,0,0,0,1403,1401,1,0,0,0,1404,1405,
        1,0,0,0,1405,1471,3,196,98,17,1406,1407,10,15,0,0,1407,1408,7,9,
        0,0,1408,1471,3,196,98,16,1409,1410,10,13,0,0,1410,1411,7,10,0,0,
        1411,1471,3,196,98,14,1412,1413,10,12,0,0,1413,1414,5,106,0,0,1414,
        1471,3,196,98,13,1415,1416,10,11,0,0,1416,1417,5,108,0,0,1417,1471,
        3,196,98,12,1418,1419,10,10,0,0,1419,1420,5,107,0,0,1420,1471,3,
        196,98,11,1421,1422,10,9,0,0,1422,1423,5,98,0,0,1423,1471,3,196,
        98,10,1424,1425,10,8,0,0,1425,1426,5,99,0,0,1426,1471,3,196,98,9,
        1427,1428,10,7,0,0,1428,1429,5,92,0,0,1429,1430,3,196,98,0,1430,
        1431,5,93,0,0,1431,1432,3,196,98,7,1432,1471,1,0,0,0,1433,1434,10,
        6,0,0,1434,1435,7,11,0,0,1435,1471,3,196,98,6,1436,1437,10,26,0,
        0,1437,1449,5,86,0,0,1438,1450,3,162,81,0,1439,1450,3,194,97,0,1440,
        1450,5,43,0,0,1441,1443,5,31,0,0,1442,1444,3,234,117,0,1443,1442,
        1,0,0,0,1443,1444,1,0,0,0,1444,1445,1,0,0,0,1445,1450,3,222,111,
        0,1446,1447,5,40,0,0,1447,1450,3,244,122,0,1448,1450,3,228,114,0,
        1449,1438,1,0,0,0,1449,1439,1,0,0,0,1449,1440,1,0,0,0,1449,1441,
        1,0,0,0,1449,1446,1,0,0,0,1449,1448,1,0,0,0,1450,1471,1,0,0,0,1451,
        1452,10,25,0,0,1452,1453,5,82,0,0,1453,1454,3,196,98,0,1454,1455,
        5,83,0,0,1455,1471,1,0,0,0,1456,1457,10,21,0,0,1457,1471,7,12,0,
        0,1458,1459,10,14,0,0,1459,1462,5,26,0,0,1460,1463,3,238,119,0,1461,
        1463,3,198,99,0,1462,1460,1,0,0,0,1462,1461,1,0,0,0,1463,1471,1,
        0,0,0,1464,1465,10,3,0,0,1465,1467,5,122,0,0,1466,1468,3,242,121,
        0,1467,1466,1,0,0,0,1467,1468,1,0,0,0,1468,1469,1,0,0,0,1469,1471,
        3,162,81,0,1470,1389,1,0,0,0,1470,1392,1,0,0,0,1470,1395,1,0,0,0,
        1470,1406,1,0,0,0,1470,1409,1,0,0,0,1470,1412,1,0,0,0,1470,1415,
        1,0,0,0,1470,1418,1,0,0,0,1470,1421,1,0,0,0,1470,1424,1,0,0,0,1470,
        1427,1,0,0,0,1470,1433,1,0,0,0,1470,1436,1,0,0,0,1470,1451,1,0,0,
        0,1470,1456,1,0,0,0,1470,1458,1,0,0,0,1470,1464,1,0,0,0,1471,1474,
        1,0,0,0,1472,1470,1,0,0,0,1472,1473,1,0,0,0,1473,197,1,0,0,0,1474,
        1472,1,0,0,0,1475,1477,3,12,6,0,1476,1475,1,0,0,0,1477,1480,1,0,
        0,0,1478,1476,1,0,0,0,1478,1479,1,0,0,0,1479,1481,1,0,0,0,1480,1478,
        1,0,0,0,1481,1485,3,238,119,0,1482,1484,3,112,56,0,1483,1482,1,0,
        0,0,1484,1487,1,0,0,0,1485,1483,1,0,0,0,1485,1486,1,0,0,0,1486,1488,
        1,0,0,0,1487,1485,1,0,0,0,1488,1489,3,162,81,0,1489,199,1,0,0,0,
        1490,1491,3,202,101,0,1491,1492,5,121,0,0,1492,1493,3,204,102,0,
        1493,201,1,0,0,0,1494,1517,3,162,81,0,1495,1497,5,78,0,0,1496,1498,
        3,92,46,0,1497,1496,1,0,0,0,1497,1498,1,0,0,0,1498,1499,1,0,0,0,
        1499,1517,5,79,0,0,1500,1501,5,78,0,0,1501,1506,3,162,81,0,1502,
        1503,5,85,0,0,1503,1505,3,162,81,0,1504,1502,1,0,0,0,1505,1508,1,
        0,0,0,1506,1504,1,0,0,0,1506,1507,1,0,0,0,1507,1509,1,0,0,0,1508,
        1506,1,0,0,0,1509,1510,5,79,0,0,1510,1517,1,0,0,0,1511,1513,5,78,
        0,0,1512,1514,3,98,49,0,1513,1512,1,0,0,0,1513,1514,1,0,0,0,1514,
        1515,1,0,0,0,1515,1517,5,79,0,0,1516,1494,1,0,0,0,1516,1495,1,0,
        0,0,1516,1500,1,0,0,0,1516,1511,1,0,0,0,1517,203,1,0,0,0,1518,1521,
        3,196,98,0,1519,1521,3,156,78,0,1520,1518,1,0,0,0,1520,1519,1,0,
        0,0,1521,205,1,0,0,0,1522,1523,5,78,0,0,1523,1524,3,196,98,0,1524,
        1525,5,79,0,0,1525,1541,1,0,0,0,1526,1541,5,43,0,0,1527,1541,5,40,
        0,0,1528,1541,3,104,52,0,1529,1541,3,162,81,0,1530,1531,3,46,23,
        0,1531,1532,5,86,0,0,1532,1533,5,9,0,0,1533,1541,1,0,0,0,1534,1538,
        3,234,117,0,1535,1539,3,246,123,0,1536,1537,5,43,0,0,1537,1539,3,
        248,124,0,1538,1535,1,0,0,0,1538,1536,1,0,0,0,1539,1541,1,0,0,0,
        1540,1522,1,0,0,0,1540,1526,1,0,0,0,1540,1527,1,0,0,0,1540,1528,
        1,0,0,0,1540,1529,1,0,0,0,1540,1530,1,0,0,0,1540,1534,1,0,0,0,1541,
        207,1,0,0,0,1542,1543,5,41,0,0,1543,1544,3,190,95,0,1544,1548,5,
        80,0,0,1545,1547,3,210,105,0,1546,1545,1,0,0,0,1547,1550,1,0,0,0,
        1548,1546,1,0,0,0,1548,1549,1,0,0,0,1549,1551,1,0,0,0,1550,1548,
        1,0,0,0,1551,1552,5,81,0,0,1552,209,1,0,0,0,1553,1557,5,6,0,0,1554,
        1558,3,192,96,0,1555,1558,5,77,0,0,1556,1558,3,212,106,0,1557,1554,
        1,0,0,0,1557,1555,1,0,0,0,1557,1556,1,0,0,0,1558,1559,1,0,0,0,1559,
        1560,7,13,0,0,1560,1565,3,214,107,0,1561,1562,5,12,0,0,1562,1563,
        7,13,0,0,1563,1565,3,214,107,0,1564,1553,1,0,0,0,1564,1561,1,0,0,
        0,1565,211,1,0,0,0,1566,1567,6,106,-1,0,1567,1568,5,78,0,0,1568,
        1569,3,212,106,0,1569,1570,5,79,0,0,1570,1593,1,0,0,0,1571,1573,
        3,12,6,0,1572,1571,1,0,0,0,1573,1576,1,0,0,0,1574,1572,1,0,0,0,1574,
        1575,1,0,0,0,1575,1577,1,0,0,0,1576,1574,1,0,0,0,1577,1581,3,238,
        119,0,1578,1580,3,112,56,0,1579,1578,1,0,0,0,1580,1583,1,0,0,0,1581,
        1579,1,0,0,0,1581,1582,1,0,0,0,1582,1584,1,0,0,0,1583,1581,1,0,0,
        0,1584,1589,3,162,81,0,1585,1586,5,98,0,0,1586,1588,3,196,98,0,1587,
        1585,1,0,0,0,1588,1591,1,0,0,0,1589,1587,1,0,0,0,1589,1590,1,0,0,
        0,1590,1593,1,0,0,0,1591,1589,1,0,0,0,1592,1566,1,0,0,0,1592,1574,
        1,0,0,0,1593,1599,1,0,0,0,1594,1595,10,1,0,0,1595,1596,5,98,0,0,
        1596,1598,3,196,98,0,1597,1594,1,0,0,0,1598,1601,1,0,0,0,1599,1597,
        1,0,0,0,1599,1600,1,0,0,0,1600,213,1,0,0,0,1601,1599,1,0,0,0,1602,
        1610,3,156,78,0,1603,1605,3,158,79,0,1604,1603,1,0,0,0,1605,1608,
        1,0,0,0,1606,1604,1,0,0,0,1606,1607,1,0,0,0,1607,1610,1,0,0,0,1608,
        1606,1,0,0,0,1609,1602,1,0,0,0,1609,1606,1,0,0,0,1610,215,1,0,0,
        0,1611,1612,3,82,41,0,1612,1613,5,86,0,0,1613,1615,1,0,0,0,1614,
        1611,1,0,0,0,1614,1615,1,0,0,0,1615,1619,1,0,0,0,1616,1618,3,112,
        56,0,1617,1616,1,0,0,0,1618,1621,1,0,0,0,1619,1617,1,0,0,0,1619,
        1620,1,0,0,0,1620,1622,1,0,0,0,1621,1619,1,0,0,0,1622,1624,3,162,
        81,0,1623,1625,3,242,121,0,1624,1623,1,0,0,0,1624,1625,1,0,0,0,1625,
        217,1,0,0,0,1626,1627,3,234,117,0,1627,1628,3,220,110,0,1628,1629,
        3,226,113,0,1629,1636,1,0,0,0,1630,1633,3,220,110,0,1631,1634,3,
        224,112,0,1632,1634,3,226,113,0,1633,1631,1,0,0,0,1633,1632,1,0,
        0,0,1634,1636,1,0,0,0,1635,1626,1,0,0,0,1635,1630,1,0,0,0,1636,219,
        1,0,0,0,1637,1639,3,162,81,0,1638,1640,3,230,115,0,1639,1638,1,0,
        0,0,1639,1640,1,0,0,0,1640,1648,1,0,0,0,1641,1642,5,86,0,0,1642,
        1644,3,162,81,0,1643,1645,3,230,115,0,1644,1643,1,0,0,0,1644,1645,
        1,0,0,0,1645,1647,1,0,0,0,1646,1641,1,0,0,0,1647,1650,1,0,0,0,1648,
        1646,1,0,0,0,1648,1649,1,0,0,0,1649,1653,1,0,0,0,1650,1648,1,0,0,
        0,1651,1653,3,240,120,0,1652,1637,1,0,0,0,1652,1651,1,0,0,0,1653,
        221,1,0,0,0,1654,1656,3,162,81,0,1655,1657,3,232,116,0,1656,1655,
        1,0,0,0,1656,1657,1,0,0,0,1657,1658,1,0,0,0,1658,1659,3,226,113,
        0,1659,223,1,0,0,0,1660,1688,5,82,0,0,1661,1666,5,83,0,0,1662,1663,
        5,82,0,0,1663,1665,5,83,0,0,1664,1662,1,0,0,0,1665,1668,1,0,0,0,
        1666,1664,1,0,0,0,1666,1667,1,0,0,0,1667,1669,1,0,0,0,1668,1666,
        1,0,0,0,1669,1689,3,80,40,0,1670,1671,3,196,98,0,1671,1678,5,83,
        0,0,1672,1673,5,82,0,0,1673,1674,3,196,98,0,1674,1675,5,83,0,0,1675,
        1677,1,0,0,0,1676,1672,1,0,0,0,1677,1680,1,0,0,0,1678,1676,1,0,0,
        0,1678,1679,1,0,0,0,1679,1685,1,0,0,0,1680,1678,1,0,0,0,1681,1682,
        5,82,0,0,1682,1684,5,83,0,0,1683,1681,1,0,0,0,1684,1687,1,0,0,0,
        1685,1683,1,0,0,0,1685,1686,1,0,0,0,1686,1689,1,0,0,0,1687,1685,
        1,0,0,0,1688,1661,1,0,0,0,1688,1670,1,0,0,0,1689,225,1,0,0,0,1690,
        1692,3,248,124,0,1691,1693,3,32,16,0,1692,1691,1,0,0,0,1692,1693,
        1,0,0,0,1693,227,1,0,0,0,1694,1695,3,234,117,0,1695,1696,3,246,123,
        0,1696,229,1,0,0,0,1697,1698,5,89,0,0,1698,1701,5,88,0,0,1699,1701,
        3,242,121,0,1700,1697,1,0,0,0,1700,1699,1,0,0,0,1701,231,1,0,0,0,
        1702,1703,5,89,0,0,1703,1706,5,88,0,0,1704,1706,3,234,117,0,1705,
        1702,1,0,0,0,1705,1704,1,0,0,0,1706,233,1,0,0,0,1707,1708,5,89,0,
        0,1708,1709,3,236,118,0,1709,1710,5,88,0,0,1710,235,1,0,0,0,1711,
        1716,3,238,119,0,1712,1713,5,85,0,0,1713,1715,3,238,119,0,1714,1712,
        1,0,0,0,1715,1718,1,0,0,0,1716,1714,1,0,0,0,1716,1717,1,0,0,0,1717,
        237,1,0,0,0,1718,1716,1,0,0,0,1719,1721,3,112,56,0,1720,1719,1,0,
        0,0,1721,1724,1,0,0,0,1722,1720,1,0,0,0,1722,1723,1,0,0,0,1723,1727,
        1,0,0,0,1724,1722,1,0,0,0,1725,1728,3,82,41,0,1726,1728,3,240,120,
        0,1727,1725,1,0,0,0,1727,1726,1,0,0,0,1728,1739,1,0,0,0,1729,1731,
        3,112,56,0,1730,1729,1,0,0,0,1731,1734,1,0,0,0,1732,1730,1,0,0,0,
        1732,1733,1,0,0,0,1733,1735,1,0,0,0,1734,1732,1,0,0,0,1735,1736,
        5,82,0,0,1736,1738,5,83,0,0,1737,1732,1,0,0,0,1738,1741,1,0,0,0,
        1739,1737,1,0,0,0,1739,1740,1,0,0,0,1740,239,1,0,0,0,1741,1739,1,
        0,0,0,1742,1743,7,14,0,0,1743,241,1,0,0,0,1744,1745,5,89,0,0,1745,
        1750,3,84,42,0,1746,1747,5,85,0,0,1747,1749,3,84,42,0,1748,1746,
        1,0,0,0,1749,1752,1,0,0,0,1750,1748,1,0,0,0,1750,1751,1,0,0,0,1751,
        1753,1,0,0,0,1752,1750,1,0,0,0,1753,1754,5,88,0,0,1754,243,1,0,0,
        0,1755,1765,3,248,124,0,1756,1758,5,86,0,0,1757,1759,3,242,121,0,
        1758,1757,1,0,0,0,1758,1759,1,0,0,0,1759,1760,1,0,0,0,1760,1762,
        3,162,81,0,1761,1763,3,248,124,0,1762,1761,1,0,0,0,1762,1763,1,0,
        0,0,1763,1765,1,0,0,0,1764,1755,1,0,0,0,1764,1756,1,0,0,0,1765,245,
        1,0,0,0,1766,1767,5,40,0,0,1767,1772,3,244,122,0,1768,1769,3,162,
        81,0,1769,1770,3,248,124,0,1770,1772,1,0,0,0,1771,1766,1,0,0,0,1771,
        1768,1,0,0,0,1772,247,1,0,0,0,1773,1775,5,78,0,0,1774,1776,3,192,
        96,0,1775,1774,1,0,0,0,1775,1776,1,0,0,0,1776,1777,1,0,0,0,1777,
        1778,5,79,0,0,1778,249,1,0,0,0,221,251,256,262,269,274,283,288,295,
        303,306,313,325,329,334,338,342,346,356,364,372,376,383,390,394,
        397,400,409,415,420,423,429,435,439,447,456,463,469,473,486,495,
        500,507,517,522,529,533,545,556,561,571,579,589,598,609,614,623,
        633,638,647,653,660,665,673,677,679,685,690,694,701,707,709,716,
        721,726,729,731,741,751,756,759,764,773,780,791,797,808,818,829,
        838,843,846,853,863,871,874,877,890,898,903,911,915,919,923,927,
        929,933,939,947,957,966,976,984,998,1005,1010,1016,1025,1035,1044,
        1054,1059,1070,1076,1079,1086,1095,1118,1121,1124,1132,1136,1144,
        1150,1161,1170,1175,1188,1194,1201,1214,1223,1232,1238,1246,1252,
        1257,1262,1270,1275,1279,1283,1287,1289,1293,1298,1303,1318,1324,
        1331,1337,1340,1351,1359,1374,1378,1383,1387,1403,1443,1449,1462,
        1467,1470,1472,1478,1485,1497,1506,1513,1516,1520,1538,1540,1548,
        1557,1564,1574,1581,1589,1592,1599,1606,1609,1614,1619,1624,1633,
        1635,1639,1644,1648,1652,1656,1666,1678,1685,1688,1692,1700,1705,
        1716,1722,1727,1732,1739,1750,1758,1762,1764,1771,1775
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!JavaParser.__ATN) {
            JavaParser.__ATN = new antlr.ATNDeserializer().deserialize(JavaParser._serializedATN);
        }

        return JavaParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(JavaParser.literalNames, JavaParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return JavaParser.vocabulary;
    }

    private static readonly decisionsToDFA = JavaParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class CompilationUnitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(JavaParser.EOF, 0)!;
    }
    public packageDeclaration(): PackageDeclarationContext | null {
        return this.getRuleContext(0, PackageDeclarationContext);
    }
    public importDeclaration(): ImportDeclarationContext[];
    public importDeclaration(i: number): ImportDeclarationContext | null;
    public importDeclaration(i?: number): ImportDeclarationContext[] | ImportDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ImportDeclarationContext);
        }

        return this.getRuleContext(i, ImportDeclarationContext);
    }
    public typeDeclaration(): TypeDeclarationContext[];
    public typeDeclaration(i: number): TypeDeclarationContext | null;
    public typeDeclaration(i?: number): TypeDeclarationContext[] | TypeDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeDeclarationContext);
        }

        return this.getRuleContext(i, TypeDeclarationContext);
    }
    public moduleDeclaration(): ModuleDeclarationContext | null {
        return this.getRuleContext(0, ModuleDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_compilationUnit;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterCompilationUnit) {
             listener.enterCompilationUnit(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitCompilationUnit) {
             listener.exitCompilationUnit(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitCompilationUnit) {
            return visitor.visitCompilationUnit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PackageDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PACKAGE(): antlr.TerminalNode {
        return this.getToken(JavaParser.PACKAGE, 0)!;
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(JavaParser.SEMI, 0)!;
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_packageDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterPackageDeclaration) {
             listener.enterPackageDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitPackageDeclaration) {
             listener.exitPackageDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitPackageDeclaration) {
            return visitor.visitPackageDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ImportDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IMPORT(): antlr.TerminalNode {
        return this.getToken(JavaParser.IMPORT, 0)!;
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(JavaParser.SEMI, 0)!;
    }
    public STATIC(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.STATIC, 0);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DOT, 0);
    }
    public MUL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.MUL, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_importDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterImportDeclaration) {
             listener.enterImportDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitImportDeclaration) {
             listener.exitImportDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitImportDeclaration) {
            return visitor.visitImportDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classDeclaration(): ClassDeclarationContext | null {
        return this.getRuleContext(0, ClassDeclarationContext);
    }
    public enumDeclaration(): EnumDeclarationContext | null {
        return this.getRuleContext(0, EnumDeclarationContext);
    }
    public interfaceDeclaration(): InterfaceDeclarationContext | null {
        return this.getRuleContext(0, InterfaceDeclarationContext);
    }
    public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | null {
        return this.getRuleContext(0, AnnotationTypeDeclarationContext);
    }
    public recordDeclaration(): RecordDeclarationContext | null {
        return this.getRuleContext(0, RecordDeclarationContext);
    }
    public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
    public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext | null;
    public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext[] | ClassOrInterfaceModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassOrInterfaceModifierContext);
        }

        return this.getRuleContext(i, ClassOrInterfaceModifierContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterTypeDeclaration) {
             listener.enterTypeDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitTypeDeclaration) {
             listener.exitTypeDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitTypeDeclaration) {
            return visitor.visitTypeDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classOrInterfaceModifier(): ClassOrInterfaceModifierContext | null {
        return this.getRuleContext(0, ClassOrInterfaceModifierContext);
    }
    public NATIVE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.NATIVE, 0);
    }
    public SYNCHRONIZED(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SYNCHRONIZED, 0);
    }
    public TRANSIENT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.TRANSIENT, 0);
    }
    public VOLATILE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.VOLATILE, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_modifier;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterModifier) {
             listener.enterModifier(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitModifier) {
             listener.exitModifier(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitModifier) {
            return visitor.visitModifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassOrInterfaceModifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public annotation(): AnnotationContext | null {
        return this.getRuleContext(0, AnnotationContext);
    }
    public PUBLIC(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.PUBLIC, 0);
    }
    public PROTECTED(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.PROTECTED, 0);
    }
    public PRIVATE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.PRIVATE, 0);
    }
    public STATIC(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.STATIC, 0);
    }
    public ABSTRACT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.ABSTRACT, 0);
    }
    public FINAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.FINAL, 0);
    }
    public STRICTFP(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.STRICTFP, 0);
    }
    public SEALED(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEALED, 0);
    }
    public NON_SEALED(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.NON_SEALED, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_classOrInterfaceModifier;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterClassOrInterfaceModifier) {
             listener.enterClassOrInterfaceModifier(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitClassOrInterfaceModifier) {
             listener.exitClassOrInterfaceModifier(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitClassOrInterfaceModifier) {
            return visitor.visitClassOrInterfaceModifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableModifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FINAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.FINAL, 0);
    }
    public annotation(): AnnotationContext | null {
        return this.getRuleContext(0, AnnotationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_variableModifier;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterVariableModifier) {
             listener.enterVariableModifier(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitVariableModifier) {
             listener.exitVariableModifier(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitVariableModifier) {
            return visitor.visitVariableModifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CLASS(): antlr.TerminalNode {
        return this.getToken(JavaParser.CLASS, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public classBody(): ClassBodyContext {
        return this.getRuleContext(0, ClassBodyContext)!;
    }
    public typeParameters(): TypeParametersContext | null {
        return this.getRuleContext(0, TypeParametersContext);
    }
    public EXTENDS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.EXTENDS, 0);
    }
    public typeType(): TypeTypeContext | null {
        return this.getRuleContext(0, TypeTypeContext);
    }
    public IMPLEMENTS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.IMPLEMENTS, 0);
    }
    public typeList(): TypeListContext[];
    public typeList(i: number): TypeListContext | null;
    public typeList(i?: number): TypeListContext[] | TypeListContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeListContext);
        }

        return this.getRuleContext(i, TypeListContext);
    }
    public PERMITS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.PERMITS, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_classDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterClassDeclaration) {
             listener.enterClassDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitClassDeclaration) {
             listener.exitClassDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitClassDeclaration) {
            return visitor.visitClassDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(JavaParser.LT, 0)!;
    }
    public typeParameter(): TypeParameterContext[];
    public typeParameter(i: number): TypeParameterContext | null;
    public typeParameter(i?: number): TypeParameterContext[] | TypeParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterContext);
        }

        return this.getRuleContext(i, TypeParameterContext);
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(JavaParser.GT, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeParameters;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterTypeParameters) {
             listener.enterTypeParameters(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitTypeParameters) {
             listener.exitTypeParameters(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitTypeParameters) {
            return visitor.visitTypeParameters(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public EXTENDS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.EXTENDS, 0);
    }
    public typeBound(): TypeBoundContext | null {
        return this.getRuleContext(0, TypeBoundContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeParameter;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterTypeParameter) {
             listener.enterTypeParameter(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitTypeParameter) {
             listener.exitTypeParameter(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitTypeParameter) {
            return visitor.visitTypeParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeType(): TypeTypeContext[];
    public typeType(i: number): TypeTypeContext | null;
    public typeType(i?: number): TypeTypeContext[] | TypeTypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeTypeContext);
        }

        return this.getRuleContext(i, TypeTypeContext);
    }
    public BITAND(): antlr.TerminalNode[];
    public BITAND(i: number): antlr.TerminalNode | null;
    public BITAND(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.BITAND);
    	} else {
    		return this.getToken(JavaParser.BITAND, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeBound;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterTypeBound) {
             listener.enterTypeBound(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitTypeBound) {
             listener.exitTypeBound(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitTypeBound) {
            return visitor.visitTypeBound(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ENUM(): antlr.TerminalNode {
        return this.getToken(JavaParser.ENUM, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.RBRACE, 0)!;
    }
    public IMPLEMENTS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.IMPLEMENTS, 0);
    }
    public typeList(): TypeListContext | null {
        return this.getRuleContext(0, TypeListContext);
    }
    public enumConstants(): EnumConstantsContext | null {
        return this.getRuleContext(0, EnumConstantsContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.COMMA, 0);
    }
    public enumBodyDeclarations(): EnumBodyDeclarationsContext | null {
        return this.getRuleContext(0, EnumBodyDeclarationsContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_enumDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterEnumDeclaration) {
             listener.enterEnumDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitEnumDeclaration) {
             listener.exitEnumDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitEnumDeclaration) {
            return visitor.visitEnumDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumConstantsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enumConstant(): EnumConstantContext[];
    public enumConstant(i: number): EnumConstantContext | null;
    public enumConstant(i?: number): EnumConstantContext[] | EnumConstantContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EnumConstantContext);
        }

        return this.getRuleContext(i, EnumConstantContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_enumConstants;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterEnumConstants) {
             listener.enterEnumConstants(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitEnumConstants) {
             listener.exitEnumConstants(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitEnumConstants) {
            return visitor.visitEnumConstants(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumConstantContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public arguments(): ArgumentsContext | null {
        return this.getRuleContext(0, ArgumentsContext);
    }
    public classBody(): ClassBodyContext | null {
        return this.getRuleContext(0, ClassBodyContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_enumConstant;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterEnumConstant) {
             listener.enterEnumConstant(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitEnumConstant) {
             listener.exitEnumConstant(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitEnumConstant) {
            return visitor.visitEnumConstant(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumBodyDeclarationsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(JavaParser.SEMI, 0)!;
    }
    public classBodyDeclaration(): ClassBodyDeclarationContext[];
    public classBodyDeclaration(i: number): ClassBodyDeclarationContext | null;
    public classBodyDeclaration(i?: number): ClassBodyDeclarationContext[] | ClassBodyDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassBodyDeclarationContext);
        }

        return this.getRuleContext(i, ClassBodyDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_enumBodyDeclarations;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterEnumBodyDeclarations) {
             listener.enterEnumBodyDeclarations(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitEnumBodyDeclarations) {
             listener.exitEnumBodyDeclarations(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitEnumBodyDeclarations) {
            return visitor.visitEnumBodyDeclarations(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InterfaceDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTERFACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.INTERFACE, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public interfaceBody(): InterfaceBodyContext {
        return this.getRuleContext(0, InterfaceBodyContext)!;
    }
    public typeParameters(): TypeParametersContext | null {
        return this.getRuleContext(0, TypeParametersContext);
    }
    public EXTENDS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.EXTENDS, 0);
    }
    public typeList(): TypeListContext | null {
        return this.getRuleContext(0, TypeListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_interfaceDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterInterfaceDeclaration) {
             listener.enterInterfaceDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitInterfaceDeclaration) {
             listener.exitInterfaceDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitInterfaceDeclaration) {
            return visitor.visitInterfaceDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.RBRACE, 0)!;
    }
    public classBodyDeclaration(): ClassBodyDeclarationContext[];
    public classBodyDeclaration(i: number): ClassBodyDeclarationContext | null;
    public classBodyDeclaration(i?: number): ClassBodyDeclarationContext[] | ClassBodyDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassBodyDeclarationContext);
        }

        return this.getRuleContext(i, ClassBodyDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_classBody;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterClassBody) {
             listener.enterClassBody(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitClassBody) {
             listener.exitClassBody(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitClassBody) {
            return visitor.visitClassBody(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InterfaceBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.RBRACE, 0)!;
    }
    public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext[];
    public interfaceBodyDeclaration(i: number): InterfaceBodyDeclarationContext | null;
    public interfaceBodyDeclaration(i?: number): InterfaceBodyDeclarationContext[] | InterfaceBodyDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceBodyDeclarationContext);
        }

        return this.getRuleContext(i, InterfaceBodyDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_interfaceBody;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterInterfaceBody) {
             listener.enterInterfaceBody(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitInterfaceBody) {
             listener.exitInterfaceBody(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitInterfaceBody) {
            return visitor.visitInterfaceBody(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassBodyDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEMI, 0);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public STATIC(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.STATIC, 0);
    }
    public memberDeclaration(): MemberDeclarationContext | null {
        return this.getRuleContext(0, MemberDeclarationContext);
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_classBodyDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterClassBodyDeclaration) {
             listener.enterClassBodyDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitClassBodyDeclaration) {
             listener.exitClassBodyDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitClassBodyDeclaration) {
            return visitor.visitClassBodyDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MemberDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public methodDeclaration(): MethodDeclarationContext | null {
        return this.getRuleContext(0, MethodDeclarationContext);
    }
    public genericMethodDeclaration(): GenericMethodDeclarationContext | null {
        return this.getRuleContext(0, GenericMethodDeclarationContext);
    }
    public fieldDeclaration(): FieldDeclarationContext | null {
        return this.getRuleContext(0, FieldDeclarationContext);
    }
    public constructorDeclaration(): ConstructorDeclarationContext | null {
        return this.getRuleContext(0, ConstructorDeclarationContext);
    }
    public genericConstructorDeclaration(): GenericConstructorDeclarationContext | null {
        return this.getRuleContext(0, GenericConstructorDeclarationContext);
    }
    public interfaceDeclaration(): InterfaceDeclarationContext | null {
        return this.getRuleContext(0, InterfaceDeclarationContext);
    }
    public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | null {
        return this.getRuleContext(0, AnnotationTypeDeclarationContext);
    }
    public classDeclaration(): ClassDeclarationContext | null {
        return this.getRuleContext(0, ClassDeclarationContext);
    }
    public enumDeclaration(): EnumDeclarationContext | null {
        return this.getRuleContext(0, EnumDeclarationContext);
    }
    public recordDeclaration(): RecordDeclarationContext | null {
        return this.getRuleContext(0, RecordDeclarationContext);
    }
    public jsniMethodDeclaration(): JsniMethodDeclarationContext | null {
        return this.getRuleContext(0, JsniMethodDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_memberDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterMemberDeclaration) {
             listener.enterMemberDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitMemberDeclaration) {
             listener.exitMemberDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitMemberDeclaration) {
            return visitor.visitMemberDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MethodDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeTypeOrVoid(): TypeTypeOrVoidContext {
        return this.getRuleContext(0, TypeTypeOrVoidContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public formalParameters(): FormalParametersContext {
        return this.getRuleContext(0, FormalParametersContext)!;
    }
    public methodBody(): MethodBodyContext {
        return this.getRuleContext(0, MethodBodyContext)!;
    }
    public LBRACK(): antlr.TerminalNode[];
    public LBRACK(i: number): antlr.TerminalNode | null;
    public LBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.LBRACK);
    	} else {
    		return this.getToken(JavaParser.LBRACK, i);
    	}
    }
    public RBRACK(): antlr.TerminalNode[];
    public RBRACK(i: number): antlr.TerminalNode | null;
    public RBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.RBRACK);
    	} else {
    		return this.getToken(JavaParser.RBRACK, i);
    	}
    }
    public THROWS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.THROWS, 0);
    }
    public qualifiedNameList(): QualifiedNameListContext | null {
        return this.getRuleContext(0, QualifiedNameListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_methodDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterMethodDeclaration) {
             listener.enterMethodDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitMethodDeclaration) {
             listener.exitMethodDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitMethodDeclaration) {
            return visitor.visitMethodDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JsniMethodDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeTypeOrVoid(): TypeTypeOrVoidContext {
        return this.getRuleContext(0, TypeTypeOrVoidContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public formalParameters(): FormalParametersContext {
        return this.getRuleContext(0, FormalParametersContext)!;
    }
    public JSNI_COMMENT(): antlr.TerminalNode {
        return this.getToken(JavaParser.JSNI_COMMENT, 0)!;
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public LBRACK(): antlr.TerminalNode[];
    public LBRACK(i: number): antlr.TerminalNode | null;
    public LBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.LBRACK);
    	} else {
    		return this.getToken(JavaParser.LBRACK, i);
    	}
    }
    public RBRACK(): antlr.TerminalNode[];
    public RBRACK(i: number): antlr.TerminalNode | null;
    public RBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.RBRACK);
    	} else {
    		return this.getToken(JavaParser.RBRACK, i);
    	}
    }
    public THROWS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.THROWS, 0);
    }
    public qualifiedNameList(): QualifiedNameListContext | null {
        return this.getRuleContext(0, QualifiedNameListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_jsniMethodDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterJsniMethodDeclaration) {
             listener.enterJsniMethodDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitJsniMethodDeclaration) {
             listener.exitJsniMethodDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitJsniMethodDeclaration) {
            return visitor.visitJsniMethodDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MethodBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public JSNI_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.JSNI_COMMENT, 0);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_methodBody;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterMethodBody) {
             listener.enterMethodBody(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitMethodBody) {
             listener.exitMethodBody(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitMethodBody) {
            return visitor.visitMethodBody(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeTypeOrVoidContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeType(): TypeTypeContext | null {
        return this.getRuleContext(0, TypeTypeContext);
    }
    public VOID(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.VOID, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeTypeOrVoid;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterTypeTypeOrVoid) {
             listener.enterTypeTypeOrVoid(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitTypeTypeOrVoid) {
             listener.exitTypeTypeOrVoid(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitTypeTypeOrVoid) {
            return visitor.visitTypeTypeOrVoid(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericMethodDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeParameters(): TypeParametersContext {
        return this.getRuleContext(0, TypeParametersContext)!;
    }
    public methodDeclaration(): MethodDeclarationContext {
        return this.getRuleContext(0, MethodDeclarationContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_genericMethodDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterGenericMethodDeclaration) {
             listener.enterGenericMethodDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitGenericMethodDeclaration) {
             listener.exitGenericMethodDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitGenericMethodDeclaration) {
            return visitor.visitGenericMethodDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericConstructorDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeParameters(): TypeParametersContext {
        return this.getRuleContext(0, TypeParametersContext)!;
    }
    public constructorDeclaration(): ConstructorDeclarationContext {
        return this.getRuleContext(0, ConstructorDeclarationContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_genericConstructorDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterGenericConstructorDeclaration) {
             listener.enterGenericConstructorDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitGenericConstructorDeclaration) {
             listener.exitGenericConstructorDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitGenericConstructorDeclaration) {
            return visitor.visitGenericConstructorDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstructorDeclarationContext extends antlr.ParserRuleContext {
    public _constructorBody?: BlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public formalParameters(): FormalParametersContext {
        return this.getRuleContext(0, FormalParametersContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public THROWS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.THROWS, 0);
    }
    public qualifiedNameList(): QualifiedNameListContext | null {
        return this.getRuleContext(0, QualifiedNameListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_constructorDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterConstructorDeclaration) {
             listener.enterConstructorDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitConstructorDeclaration) {
             listener.exitConstructorDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitConstructorDeclaration) {
            return visitor.visitConstructorDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeType(): TypeTypeContext {
        return this.getRuleContext(0, TypeTypeContext)!;
    }
    public variableDeclarators(): VariableDeclaratorsContext {
        return this.getRuleContext(0, VariableDeclaratorsContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(JavaParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_fieldDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterFieldDeclaration) {
             listener.enterFieldDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitFieldDeclaration) {
             listener.exitFieldDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitFieldDeclaration) {
            return visitor.visitFieldDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InterfaceBodyDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext | null {
        return this.getRuleContext(0, InterfaceMemberDeclarationContext);
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_interfaceBodyDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterInterfaceBodyDeclaration) {
             listener.enterInterfaceBodyDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitInterfaceBodyDeclaration) {
             listener.exitInterfaceBodyDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitInterfaceBodyDeclaration) {
            return visitor.visitInterfaceBodyDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InterfaceMemberDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public constDeclaration(): ConstDeclarationContext | null {
        return this.getRuleContext(0, ConstDeclarationContext);
    }
    public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext | null {
        return this.getRuleContext(0, InterfaceMethodDeclarationContext);
    }
    public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext | null {
        return this.getRuleContext(0, GenericInterfaceMethodDeclarationContext);
    }
    public interfaceDeclaration(): InterfaceDeclarationContext | null {
        return this.getRuleContext(0, InterfaceDeclarationContext);
    }
    public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | null {
        return this.getRuleContext(0, AnnotationTypeDeclarationContext);
    }
    public classDeclaration(): ClassDeclarationContext | null {
        return this.getRuleContext(0, ClassDeclarationContext);
    }
    public enumDeclaration(): EnumDeclarationContext | null {
        return this.getRuleContext(0, EnumDeclarationContext);
    }
    public recordDeclaration(): RecordDeclarationContext | null {
        return this.getRuleContext(0, RecordDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_interfaceMemberDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterInterfaceMemberDeclaration) {
             listener.enterInterfaceMemberDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitInterfaceMemberDeclaration) {
             listener.exitInterfaceMemberDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitInterfaceMemberDeclaration) {
            return visitor.visitInterfaceMemberDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeType(): TypeTypeContext {
        return this.getRuleContext(0, TypeTypeContext)!;
    }
    public constantDeclarator(): ConstantDeclaratorContext[];
    public constantDeclarator(i: number): ConstantDeclaratorContext | null;
    public constantDeclarator(i?: number): ConstantDeclaratorContext[] | ConstantDeclaratorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConstantDeclaratorContext);
        }

        return this.getRuleContext(i, ConstantDeclaratorContext);
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(JavaParser.SEMI, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_constDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterConstDeclaration) {
             listener.enterConstDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitConstDeclaration) {
             listener.exitConstDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitConstDeclaration) {
            return visitor.visitConstDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstantDeclaratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(JavaParser.ASSIGN, 0)!;
    }
    public variableInitializer(): VariableInitializerContext {
        return this.getRuleContext(0, VariableInitializerContext)!;
    }
    public LBRACK(): antlr.TerminalNode[];
    public LBRACK(i: number): antlr.TerminalNode | null;
    public LBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.LBRACK);
    	} else {
    		return this.getToken(JavaParser.LBRACK, i);
    	}
    }
    public RBRACK(): antlr.TerminalNode[];
    public RBRACK(i: number): antlr.TerminalNode | null;
    public RBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.RBRACK);
    	} else {
    		return this.getToken(JavaParser.RBRACK, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_constantDeclarator;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterConstantDeclarator) {
             listener.enterConstantDeclarator(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitConstantDeclarator) {
             listener.exitConstantDeclarator(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitConstantDeclarator) {
            return visitor.visitConstantDeclarator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InterfaceMethodDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public interfaceCommonBodyDeclaration(): InterfaceCommonBodyDeclarationContext {
        return this.getRuleContext(0, InterfaceCommonBodyDeclarationContext)!;
    }
    public interfaceMethodModifier(): InterfaceMethodModifierContext[];
    public interfaceMethodModifier(i: number): InterfaceMethodModifierContext | null;
    public interfaceMethodModifier(i?: number): InterfaceMethodModifierContext[] | InterfaceMethodModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceMethodModifierContext);
        }

        return this.getRuleContext(i, InterfaceMethodModifierContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_interfaceMethodDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterInterfaceMethodDeclaration) {
             listener.enterInterfaceMethodDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitInterfaceMethodDeclaration) {
             listener.exitInterfaceMethodDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitInterfaceMethodDeclaration) {
            return visitor.visitInterfaceMethodDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InterfaceMethodModifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public annotation(): AnnotationContext | null {
        return this.getRuleContext(0, AnnotationContext);
    }
    public PUBLIC(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.PUBLIC, 0);
    }
    public ABSTRACT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.ABSTRACT, 0);
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DEFAULT, 0);
    }
    public STATIC(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.STATIC, 0);
    }
    public STRICTFP(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.STRICTFP, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_interfaceMethodModifier;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterInterfaceMethodModifier) {
             listener.enterInterfaceMethodModifier(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitInterfaceMethodModifier) {
             listener.exitInterfaceMethodModifier(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitInterfaceMethodModifier) {
            return visitor.visitInterfaceMethodModifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GenericInterfaceMethodDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeParameters(): TypeParametersContext {
        return this.getRuleContext(0, TypeParametersContext)!;
    }
    public interfaceCommonBodyDeclaration(): InterfaceCommonBodyDeclarationContext {
        return this.getRuleContext(0, InterfaceCommonBodyDeclarationContext)!;
    }
    public interfaceMethodModifier(): InterfaceMethodModifierContext[];
    public interfaceMethodModifier(i: number): InterfaceMethodModifierContext | null;
    public interfaceMethodModifier(i?: number): InterfaceMethodModifierContext[] | InterfaceMethodModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceMethodModifierContext);
        }

        return this.getRuleContext(i, InterfaceMethodModifierContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_genericInterfaceMethodDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterGenericInterfaceMethodDeclaration) {
             listener.enterGenericInterfaceMethodDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitGenericInterfaceMethodDeclaration) {
             listener.exitGenericInterfaceMethodDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitGenericInterfaceMethodDeclaration) {
            return visitor.visitGenericInterfaceMethodDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InterfaceCommonBodyDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeTypeOrVoid(): TypeTypeOrVoidContext {
        return this.getRuleContext(0, TypeTypeOrVoidContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public formalParameters(): FormalParametersContext {
        return this.getRuleContext(0, FormalParametersContext)!;
    }
    public methodBody(): MethodBodyContext {
        return this.getRuleContext(0, MethodBodyContext)!;
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public LBRACK(): antlr.TerminalNode[];
    public LBRACK(i: number): antlr.TerminalNode | null;
    public LBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.LBRACK);
    	} else {
    		return this.getToken(JavaParser.LBRACK, i);
    	}
    }
    public RBRACK(): antlr.TerminalNode[];
    public RBRACK(i: number): antlr.TerminalNode | null;
    public RBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.RBRACK);
    	} else {
    		return this.getToken(JavaParser.RBRACK, i);
    	}
    }
    public THROWS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.THROWS, 0);
    }
    public qualifiedNameList(): QualifiedNameListContext | null {
        return this.getRuleContext(0, QualifiedNameListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_interfaceCommonBodyDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterInterfaceCommonBodyDeclaration) {
             listener.enterInterfaceCommonBodyDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitInterfaceCommonBodyDeclaration) {
             listener.exitInterfaceCommonBodyDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitInterfaceCommonBodyDeclaration) {
            return visitor.visitInterfaceCommonBodyDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableDeclaratorsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableDeclarator(): VariableDeclaratorContext[];
    public variableDeclarator(i: number): VariableDeclaratorContext | null;
    public variableDeclarator(i?: number): VariableDeclaratorContext[] | VariableDeclaratorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclaratorContext);
        }

        return this.getRuleContext(i, VariableDeclaratorContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_variableDeclarators;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterVariableDeclarators) {
             listener.enterVariableDeclarators(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitVariableDeclarators) {
             listener.exitVariableDeclarators(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitVariableDeclarators) {
            return visitor.visitVariableDeclarators(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableDeclaratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableDeclaratorId(): VariableDeclaratorIdContext {
        return this.getRuleContext(0, VariableDeclaratorIdContext)!;
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.ASSIGN, 0);
    }
    public variableInitializer(): VariableInitializerContext | null {
        return this.getRuleContext(0, VariableInitializerContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_variableDeclarator;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterVariableDeclarator) {
             listener.enterVariableDeclarator(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitVariableDeclarator) {
             listener.exitVariableDeclarator(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitVariableDeclarator) {
            return visitor.visitVariableDeclarator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableDeclaratorIdContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LBRACK(): antlr.TerminalNode[];
    public LBRACK(i: number): antlr.TerminalNode | null;
    public LBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.LBRACK);
    	} else {
    		return this.getToken(JavaParser.LBRACK, i);
    	}
    }
    public RBRACK(): antlr.TerminalNode[];
    public RBRACK(i: number): antlr.TerminalNode | null;
    public RBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.RBRACK);
    	} else {
    		return this.getToken(JavaParser.RBRACK, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_variableDeclaratorId;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterVariableDeclaratorId) {
             listener.enterVariableDeclaratorId(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitVariableDeclaratorId) {
             listener.exitVariableDeclaratorId(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitVariableDeclaratorId) {
            return visitor.visitVariableDeclaratorId(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableInitializerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arrayInitializer(): ArrayInitializerContext | null {
        return this.getRuleContext(0, ArrayInitializerContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_variableInitializer;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterVariableInitializer) {
             listener.enterVariableInitializer(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitVariableInitializer) {
             listener.exitVariableInitializer(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitVariableInitializer) {
            return visitor.visitVariableInitializer(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArrayInitializerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.RBRACE, 0)!;
    }
    public variableInitializer(): VariableInitializerContext[];
    public variableInitializer(i: number): VariableInitializerContext | null;
    public variableInitializer(i?: number): VariableInitializerContext[] | VariableInitializerContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableInitializerContext);
        }

        return this.getRuleContext(i, VariableInitializerContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_arrayInitializer;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterArrayInitializer) {
             listener.enterArrayInitializer(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitArrayInitializer) {
             listener.exitArrayInitializer(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitArrayInitializer) {
            return visitor.visitArrayInitializer(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassOrInterfaceTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public typeArguments(): TypeArgumentsContext[];
    public typeArguments(i: number): TypeArgumentsContext | null;
    public typeArguments(i?: number): TypeArgumentsContext[] | TypeArgumentsContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentsContext);
        }

        return this.getRuleContext(i, TypeArgumentsContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.DOT);
    	} else {
    		return this.getToken(JavaParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_classOrInterfaceType;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterClassOrInterfaceType) {
             listener.enterClassOrInterfaceType(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitClassOrInterfaceType) {
             listener.exitClassOrInterfaceType(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitClassOrInterfaceType) {
            return visitor.visitClassOrInterfaceType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeArgumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeType(): TypeTypeContext | null {
        return this.getRuleContext(0, TypeTypeContext);
    }
    public QUESTION(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.QUESTION, 0);
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public EXTENDS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.EXTENDS, 0);
    }
    public SUPER(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SUPER, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeArgument;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterTypeArgument) {
             listener.enterTypeArgument(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitTypeArgument) {
             listener.exitTypeArgument(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitTypeArgument) {
            return visitor.visitTypeArgument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedNameListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext[];
    public qualifiedName(i: number): QualifiedNameContext | null;
    public qualifiedName(i?: number): QualifiedNameContext[] | QualifiedNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }

        return this.getRuleContext(i, QualifiedNameContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_qualifiedNameList;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterQualifiedNameList) {
             listener.enterQualifiedNameList(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitQualifiedNameList) {
             listener.exitQualifiedNameList(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitQualifiedNameList) {
            return visitor.visitQualifiedNameList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FormalParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.RPAREN, 0)!;
    }
    public receiverParameter(): ReceiverParameterContext | null {
        return this.getRuleContext(0, ReceiverParameterContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.COMMA, 0);
    }
    public formalParameterList(): FormalParameterListContext | null {
        return this.getRuleContext(0, FormalParameterListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_formalParameters;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterFormalParameters) {
             listener.enterFormalParameters(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitFormalParameters) {
             listener.exitFormalParameters(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitFormalParameters) {
            return visitor.visitFormalParameters(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReceiverParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeType(): TypeTypeContext {
        return this.getRuleContext(0, TypeTypeContext)!;
    }
    public THIS(): antlr.TerminalNode {
        return this.getToken(JavaParser.THIS, 0)!;
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.DOT);
    	} else {
    		return this.getToken(JavaParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_receiverParameter;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterReceiverParameter) {
             listener.enterReceiverParameter(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitReceiverParameter) {
             listener.exitReceiverParameter(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitReceiverParameter) {
            return visitor.visitReceiverParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FormalParameterListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public formalParameter(): FormalParameterContext[];
    public formalParameter(i: number): FormalParameterContext | null;
    public formalParameter(i?: number): FormalParameterContext[] | FormalParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FormalParameterContext);
        }

        return this.getRuleContext(i, FormalParameterContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public lastFormalParameter(): LastFormalParameterContext | null {
        return this.getRuleContext(0, LastFormalParameterContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_formalParameterList;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterFormalParameterList) {
             listener.enterFormalParameterList(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitFormalParameterList) {
             listener.exitFormalParameterList(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitFormalParameterList) {
            return visitor.visitFormalParameterList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FormalParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeType(): TypeTypeContext {
        return this.getRuleContext(0, TypeTypeContext)!;
    }
    public variableDeclaratorId(): VariableDeclaratorIdContext {
        return this.getRuleContext(0, VariableDeclaratorIdContext)!;
    }
    public variableModifier(): VariableModifierContext[];
    public variableModifier(i: number): VariableModifierContext | null;
    public variableModifier(i?: number): VariableModifierContext[] | VariableModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }

        return this.getRuleContext(i, VariableModifierContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_formalParameter;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterFormalParameter) {
             listener.enterFormalParameter(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitFormalParameter) {
             listener.exitFormalParameter(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitFormalParameter) {
            return visitor.visitFormalParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LastFormalParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeType(): TypeTypeContext {
        return this.getRuleContext(0, TypeTypeContext)!;
    }
    public ELLIPSIS(): antlr.TerminalNode {
        return this.getToken(JavaParser.ELLIPSIS, 0)!;
    }
    public variableDeclaratorId(): VariableDeclaratorIdContext {
        return this.getRuleContext(0, VariableDeclaratorIdContext)!;
    }
    public variableModifier(): VariableModifierContext[];
    public variableModifier(i: number): VariableModifierContext | null;
    public variableModifier(i?: number): VariableModifierContext[] | VariableModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }

        return this.getRuleContext(i, VariableModifierContext);
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_lastFormalParameter;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterLastFormalParameter) {
             listener.enterLastFormalParameter(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitLastFormalParameter) {
             listener.exitLastFormalParameter(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitLastFormalParameter) {
            return visitor.visitLastFormalParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LambdaLVTIListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lambdaLVTIParameter(): LambdaLVTIParameterContext[];
    public lambdaLVTIParameter(i: number): LambdaLVTIParameterContext | null;
    public lambdaLVTIParameter(i?: number): LambdaLVTIParameterContext[] | LambdaLVTIParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LambdaLVTIParameterContext);
        }

        return this.getRuleContext(i, LambdaLVTIParameterContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_lambdaLVTIList;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterLambdaLVTIList) {
             listener.enterLambdaLVTIList(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitLambdaLVTIList) {
             listener.exitLambdaLVTIList(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitLambdaLVTIList) {
            return visitor.visitLambdaLVTIList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LambdaLVTIParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VAR(): antlr.TerminalNode {
        return this.getToken(JavaParser.VAR, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public variableModifier(): VariableModifierContext[];
    public variableModifier(i: number): VariableModifierContext | null;
    public variableModifier(i?: number): VariableModifierContext[] | VariableModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }

        return this.getRuleContext(i, VariableModifierContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_lambdaLVTIParameter;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterLambdaLVTIParameter) {
             listener.enterLambdaLVTIParameter(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitLambdaLVTIParameter) {
             listener.exitLambdaLVTIParameter(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitLambdaLVTIParameter) {
            return visitor.visitLambdaLVTIParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.DOT);
    	} else {
    		return this.getToken(JavaParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_qualifiedName;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterQualifiedName) {
             listener.enterQualifiedName(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitQualifiedName) {
             listener.exitQualifiedName(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitQualifiedName) {
            return visitor.visitQualifiedName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public integerLiteral(): IntegerLiteralContext | null {
        return this.getRuleContext(0, IntegerLiteralContext);
    }
    public floatLiteral(): FloatLiteralContext | null {
        return this.getRuleContext(0, FloatLiteralContext);
    }
    public CHAR_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.CHAR_LITERAL, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.STRING_LITERAL, 0);
    }
    public BOOL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.BOOL_LITERAL, 0);
    }
    public NULL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.NULL_LITERAL, 0);
    }
    public TEXT_BLOCK(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.TEXT_BLOCK, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_literal;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterLiteral) {
             listener.enterLiteral(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitLiteral) {
             listener.exitLiteral(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IntegerLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DECIMAL_LITERAL, 0);
    }
    public HEX_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.HEX_LITERAL, 0);
    }
    public OCT_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.OCT_LITERAL, 0);
    }
    public BINARY_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.BINARY_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_integerLiteral;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterIntegerLiteral) {
             listener.enterIntegerLiteral(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitIntegerLiteral) {
             listener.exitIntegerLiteral(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitIntegerLiteral) {
            return visitor.visitIntegerLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FloatLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FLOAT_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.FLOAT_LITERAL, 0);
    }
    public HEX_FLOAT_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.HEX_FLOAT_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_floatLiteral;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterFloatLiteral) {
             listener.enterFloatLiteral(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitFloatLiteral) {
             listener.exitFloatLiteral(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitFloatLiteral) {
            return visitor.visitFloatLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AltAnnotationQualifiedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AT(): antlr.TerminalNode {
        return this.getToken(JavaParser.AT, 0)!;
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.DOT);
    	} else {
    		return this.getToken(JavaParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_altAnnotationQualifiedName;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterAltAnnotationQualifiedName) {
             listener.enterAltAnnotationQualifiedName(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitAltAnnotationQualifiedName) {
             listener.exitAltAnnotationQualifiedName(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitAltAnnotationQualifiedName) {
            return visitor.visitAltAnnotationQualifiedName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AnnotationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.AT, 0);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public altAnnotationQualifiedName(): AltAnnotationQualifiedNameContext | null {
        return this.getRuleContext(0, AltAnnotationQualifiedNameContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RPAREN, 0);
    }
    public elementValuePairs(): ElementValuePairsContext | null {
        return this.getRuleContext(0, ElementValuePairsContext);
    }
    public elementValue(): ElementValueContext | null {
        return this.getRuleContext(0, ElementValueContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_annotation;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterAnnotation) {
             listener.enterAnnotation(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitAnnotation) {
             listener.exitAnnotation(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitAnnotation) {
            return visitor.visitAnnotation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ElementValuePairsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public elementValuePair(): ElementValuePairContext[];
    public elementValuePair(i: number): ElementValuePairContext | null;
    public elementValuePair(i?: number): ElementValuePairContext[] | ElementValuePairContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ElementValuePairContext);
        }

        return this.getRuleContext(i, ElementValuePairContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_elementValuePairs;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterElementValuePairs) {
             listener.enterElementValuePairs(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitElementValuePairs) {
             listener.exitElementValuePairs(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitElementValuePairs) {
            return visitor.visitElementValuePairs(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ElementValuePairContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(JavaParser.ASSIGN, 0)!;
    }
    public elementValue(): ElementValueContext {
        return this.getRuleContext(0, ElementValueContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_elementValuePair;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterElementValuePair) {
             listener.enterElementValuePair(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitElementValuePair) {
             listener.exitElementValuePair(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitElementValuePair) {
            return visitor.visitElementValuePair(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ElementValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public annotation(): AnnotationContext | null {
        return this.getRuleContext(0, AnnotationContext);
    }
    public elementValueArrayInitializer(): ElementValueArrayInitializerContext | null {
        return this.getRuleContext(0, ElementValueArrayInitializerContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_elementValue;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterElementValue) {
             listener.enterElementValue(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitElementValue) {
             listener.exitElementValue(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitElementValue) {
            return visitor.visitElementValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ElementValueArrayInitializerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.RBRACE, 0)!;
    }
    public elementValue(): ElementValueContext[];
    public elementValue(i: number): ElementValueContext | null;
    public elementValue(i?: number): ElementValueContext[] | ElementValueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ElementValueContext);
        }

        return this.getRuleContext(i, ElementValueContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_elementValueArrayInitializer;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterElementValueArrayInitializer) {
             listener.enterElementValueArrayInitializer(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitElementValueArrayInitializer) {
             listener.exitElementValueArrayInitializer(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitElementValueArrayInitializer) {
            return visitor.visitElementValueArrayInitializer(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AnnotationTypeDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AT(): antlr.TerminalNode {
        return this.getToken(JavaParser.AT, 0)!;
    }
    public INTERFACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.INTERFACE, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public annotationTypeBody(): AnnotationTypeBodyContext {
        return this.getRuleContext(0, AnnotationTypeBodyContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_annotationTypeDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterAnnotationTypeDeclaration) {
             listener.enterAnnotationTypeDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitAnnotationTypeDeclaration) {
             listener.exitAnnotationTypeDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitAnnotationTypeDeclaration) {
            return visitor.visitAnnotationTypeDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AnnotationTypeBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.RBRACE, 0)!;
    }
    public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext[];
    public annotationTypeElementDeclaration(i: number): AnnotationTypeElementDeclarationContext | null;
    public annotationTypeElementDeclaration(i?: number): AnnotationTypeElementDeclarationContext[] | AnnotationTypeElementDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationTypeElementDeclarationContext);
        }

        return this.getRuleContext(i, AnnotationTypeElementDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_annotationTypeBody;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterAnnotationTypeBody) {
             listener.enterAnnotationTypeBody(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitAnnotationTypeBody) {
             listener.exitAnnotationTypeBody(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitAnnotationTypeBody) {
            return visitor.visitAnnotationTypeBody(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AnnotationTypeElementDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public annotationTypeElementRest(): AnnotationTypeElementRestContext | null {
        return this.getRuleContext(0, AnnotationTypeElementRestContext);
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_annotationTypeElementDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterAnnotationTypeElementDeclaration) {
             listener.enterAnnotationTypeElementDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitAnnotationTypeElementDeclaration) {
             listener.exitAnnotationTypeElementDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitAnnotationTypeElementDeclaration) {
            return visitor.visitAnnotationTypeElementDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AnnotationTypeElementRestContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeType(): TypeTypeContext | null {
        return this.getRuleContext(0, TypeTypeContext);
    }
    public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext | null {
        return this.getRuleContext(0, AnnotationMethodOrConstantRestContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEMI, 0);
    }
    public classDeclaration(): ClassDeclarationContext | null {
        return this.getRuleContext(0, ClassDeclarationContext);
    }
    public interfaceDeclaration(): InterfaceDeclarationContext | null {
        return this.getRuleContext(0, InterfaceDeclarationContext);
    }
    public enumDeclaration(): EnumDeclarationContext | null {
        return this.getRuleContext(0, EnumDeclarationContext);
    }
    public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | null {
        return this.getRuleContext(0, AnnotationTypeDeclarationContext);
    }
    public recordDeclaration(): RecordDeclarationContext | null {
        return this.getRuleContext(0, RecordDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_annotationTypeElementRest;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterAnnotationTypeElementRest) {
             listener.enterAnnotationTypeElementRest(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitAnnotationTypeElementRest) {
             listener.exitAnnotationTypeElementRest(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitAnnotationTypeElementRest) {
            return visitor.visitAnnotationTypeElementRest(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AnnotationMethodOrConstantRestContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public annotationMethodRest(): AnnotationMethodRestContext | null {
        return this.getRuleContext(0, AnnotationMethodRestContext);
    }
    public annotationConstantRest(): AnnotationConstantRestContext | null {
        return this.getRuleContext(0, AnnotationConstantRestContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_annotationMethodOrConstantRest;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterAnnotationMethodOrConstantRest) {
             listener.enterAnnotationMethodOrConstantRest(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitAnnotationMethodOrConstantRest) {
             listener.exitAnnotationMethodOrConstantRest(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitAnnotationMethodOrConstantRest) {
            return visitor.visitAnnotationMethodOrConstantRest(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AnnotationMethodRestContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.RPAREN, 0)!;
    }
    public defaultValue(): DefaultValueContext | null {
        return this.getRuleContext(0, DefaultValueContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_annotationMethodRest;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterAnnotationMethodRest) {
             listener.enterAnnotationMethodRest(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitAnnotationMethodRest) {
             listener.exitAnnotationMethodRest(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitAnnotationMethodRest) {
            return visitor.visitAnnotationMethodRest(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AnnotationConstantRestContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableDeclarators(): VariableDeclaratorsContext {
        return this.getRuleContext(0, VariableDeclaratorsContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_annotationConstantRest;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterAnnotationConstantRest) {
             listener.enterAnnotationConstantRest(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitAnnotationConstantRest) {
             listener.exitAnnotationConstantRest(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitAnnotationConstantRest) {
            return visitor.visitAnnotationConstantRest(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DefaultValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DEFAULT(): antlr.TerminalNode {
        return this.getToken(JavaParser.DEFAULT, 0)!;
    }
    public elementValue(): ElementValueContext {
        return this.getRuleContext(0, ElementValueContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_defaultValue;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterDefaultValue) {
             listener.enterDefaultValue(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitDefaultValue) {
             listener.exitDefaultValue(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitDefaultValue) {
            return visitor.visitDefaultValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModuleDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MODULE(): antlr.TerminalNode {
        return this.getToken(JavaParser.MODULE, 0)!;
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public moduleBody(): ModuleBodyContext {
        return this.getRuleContext(0, ModuleBodyContext)!;
    }
    public OPEN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.OPEN, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_moduleDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterModuleDeclaration) {
             listener.enterModuleDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitModuleDeclaration) {
             listener.exitModuleDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitModuleDeclaration) {
            return visitor.visitModuleDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModuleBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.RBRACE, 0)!;
    }
    public moduleDirective(): ModuleDirectiveContext[];
    public moduleDirective(i: number): ModuleDirectiveContext | null;
    public moduleDirective(i?: number): ModuleDirectiveContext[] | ModuleDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModuleDirectiveContext);
        }

        return this.getRuleContext(i, ModuleDirectiveContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_moduleBody;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterModuleBody) {
             listener.enterModuleBody(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitModuleBody) {
             listener.exitModuleBody(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitModuleBody) {
            return visitor.visitModuleBody(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModuleDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REQUIRES(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.REQUIRES, 0);
    }
    public qualifiedName(): QualifiedNameContext[];
    public qualifiedName(i: number): QualifiedNameContext | null;
    public qualifiedName(i?: number): QualifiedNameContext[] | QualifiedNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }

        return this.getRuleContext(i, QualifiedNameContext);
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(JavaParser.SEMI, 0)!;
    }
    public requiresModifier(): RequiresModifierContext[];
    public requiresModifier(i: number): RequiresModifierContext | null;
    public requiresModifier(i?: number): RequiresModifierContext[] | RequiresModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RequiresModifierContext);
        }

        return this.getRuleContext(i, RequiresModifierContext);
    }
    public EXPORTS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.EXPORTS, 0);
    }
    public TO(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.TO, 0);
    }
    public OPENS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.OPENS, 0);
    }
    public USES(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.USES, 0);
    }
    public PROVIDES(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.PROVIDES, 0);
    }
    public WITH(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.WITH, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_moduleDirective;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterModuleDirective) {
             listener.enterModuleDirective(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitModuleDirective) {
             listener.exitModuleDirective(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitModuleDirective) {
            return visitor.visitModuleDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RequiresModifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TRANSITIVE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.TRANSITIVE, 0);
    }
    public STATIC(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.STATIC, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_requiresModifier;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterRequiresModifier) {
             listener.enterRequiresModifier(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitRequiresModifier) {
             listener.exitRequiresModifier(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitRequiresModifier) {
            return visitor.visitRequiresModifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RecordDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RECORD(): antlr.TerminalNode {
        return this.getToken(JavaParser.RECORD, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public recordHeader(): RecordHeaderContext {
        return this.getRuleContext(0, RecordHeaderContext)!;
    }
    public recordBody(): RecordBodyContext {
        return this.getRuleContext(0, RecordBodyContext)!;
    }
    public typeParameters(): TypeParametersContext | null {
        return this.getRuleContext(0, TypeParametersContext);
    }
    public IMPLEMENTS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.IMPLEMENTS, 0);
    }
    public typeList(): TypeListContext | null {
        return this.getRuleContext(0, TypeListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_recordDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterRecordDeclaration) {
             listener.enterRecordDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitRecordDeclaration) {
             listener.exitRecordDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitRecordDeclaration) {
            return visitor.visitRecordDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RecordHeaderContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.RPAREN, 0)!;
    }
    public recordComponentList(): RecordComponentListContext | null {
        return this.getRuleContext(0, RecordComponentListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_recordHeader;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterRecordHeader) {
             listener.enterRecordHeader(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitRecordHeader) {
             listener.exitRecordHeader(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitRecordHeader) {
            return visitor.visitRecordHeader(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RecordComponentListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public recordComponent(): RecordComponentContext[];
    public recordComponent(i: number): RecordComponentContext | null;
    public recordComponent(i?: number): RecordComponentContext[] | RecordComponentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RecordComponentContext);
        }

        return this.getRuleContext(i, RecordComponentContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_recordComponentList;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterRecordComponentList) {
             listener.enterRecordComponentList(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitRecordComponentList) {
             listener.exitRecordComponentList(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitRecordComponentList) {
            return visitor.visitRecordComponentList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RecordComponentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeType(): TypeTypeContext {
        return this.getRuleContext(0, TypeTypeContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_recordComponent;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterRecordComponent) {
             listener.enterRecordComponent(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitRecordComponent) {
             listener.exitRecordComponent(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitRecordComponent) {
            return visitor.visitRecordComponent(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RecordBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.RBRACE, 0)!;
    }
    public classBodyDeclaration(): ClassBodyDeclarationContext[];
    public classBodyDeclaration(i: number): ClassBodyDeclarationContext | null;
    public classBodyDeclaration(i?: number): ClassBodyDeclarationContext[] | ClassBodyDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassBodyDeclarationContext);
        }

        return this.getRuleContext(i, ClassBodyDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_recordBody;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterRecordBody) {
             listener.enterRecordBody(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitRecordBody) {
             listener.exitRecordBody(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitRecordBody) {
            return visitor.visitRecordBody(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.RBRACE, 0)!;
    }
    public blockStatement(): BlockStatementContext[];
    public blockStatement(i: number): BlockStatementContext | null;
    public blockStatement(i?: number): BlockStatementContext[] | BlockStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockStatementContext);
        }

        return this.getRuleContext(i, BlockStatementContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_block;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterBlock) {
             listener.enterBlock(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitBlock) {
             listener.exitBlock(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public localVariableDeclaration(): LocalVariableDeclarationContext | null {
        return this.getRuleContext(0, LocalVariableDeclarationContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEMI, 0);
    }
    public statement(): StatementContext | null {
        return this.getRuleContext(0, StatementContext);
    }
    public localTypeDeclaration(): LocalTypeDeclarationContext | null {
        return this.getRuleContext(0, LocalTypeDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_blockStatement;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterBlockStatement) {
             listener.enterBlockStatement(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitBlockStatement) {
             listener.exitBlockStatement(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitBlockStatement) {
            return visitor.visitBlockStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LocalVariableDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeType(): TypeTypeContext {
        return this.getRuleContext(0, TypeTypeContext)!;
    }
    public variableDeclarators(): VariableDeclaratorsContext {
        return this.getRuleContext(0, VariableDeclaratorsContext)!;
    }
    public variableModifier(): VariableModifierContext[];
    public variableModifier(i: number): VariableModifierContext | null;
    public variableModifier(i?: number): VariableModifierContext[] | VariableModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }

        return this.getRuleContext(i, VariableModifierContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_localVariableDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterLocalVariableDeclaration) {
             listener.enterLocalVariableDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitLocalVariableDeclaration) {
             listener.exitLocalVariableDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitLocalVariableDeclaration) {
            return visitor.visitLocalVariableDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.IDENTIFIER, 0);
    }
    public MODULE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.MODULE, 0);
    }
    public OPEN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.OPEN, 0);
    }
    public REQUIRES(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.REQUIRES, 0);
    }
    public EXPORTS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.EXPORTS, 0);
    }
    public OPENS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.OPENS, 0);
    }
    public TO(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.TO, 0);
    }
    public USES(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.USES, 0);
    }
    public PROVIDES(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.PROVIDES, 0);
    }
    public WITH(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.WITH, 0);
    }
    public TRANSITIVE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.TRANSITIVE, 0);
    }
    public YIELD(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.YIELD, 0);
    }
    public SEALED(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEALED, 0);
    }
    public PERMITS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.PERMITS, 0);
    }
    public RECORD(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RECORD, 0);
    }
    public VAR(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.VAR, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_identifier;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterIdentifier) {
             listener.enterIdentifier(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitIdentifier) {
             listener.exitIdentifier(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LocalTypeDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classDeclaration(): ClassDeclarationContext | null {
        return this.getRuleContext(0, ClassDeclarationContext);
    }
    public interfaceDeclaration(): InterfaceDeclarationContext | null {
        return this.getRuleContext(0, InterfaceDeclarationContext);
    }
    public recordDeclaration(): RecordDeclarationContext | null {
        return this.getRuleContext(0, RecordDeclarationContext);
    }
    public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
    public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext | null;
    public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext[] | ClassOrInterfaceModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassOrInterfaceModifierContext);
        }

        return this.getRuleContext(i, ClassOrInterfaceModifierContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_localTypeDeclaration;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterLocalTypeDeclaration) {
             listener.enterLocalTypeDeclaration(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitLocalTypeDeclaration) {
             listener.exitLocalTypeDeclaration(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitLocalTypeDeclaration) {
            return visitor.visitLocalTypeDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public _blockLabel?: BlockContext;
    public _statementExpression?: ExpressionContext;
    public _identifierLabel?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public ASSERT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.ASSERT, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEMI, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.COLON, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.IF, 0);
    }
    public parExpression(): ParExpressionContext | null {
        return this.getRuleContext(0, ParExpressionContext);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.ELSE, 0);
    }
    public FOR(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.FOR, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LPAREN, 0);
    }
    public forControl(): ForControlContext | null {
        return this.getRuleContext(0, ForControlContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RPAREN, 0);
    }
    public WHILE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.WHILE, 0);
    }
    public DO(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DO, 0);
    }
    public TRY(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.TRY, 0);
    }
    public finallyBlock(): FinallyBlockContext | null {
        return this.getRuleContext(0, FinallyBlockContext);
    }
    public catchClause(): CatchClauseContext[];
    public catchClause(i: number): CatchClauseContext | null;
    public catchClause(i?: number): CatchClauseContext[] | CatchClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CatchClauseContext);
        }

        return this.getRuleContext(i, CatchClauseContext);
    }
    public resourceSpecification(): ResourceSpecificationContext | null {
        return this.getRuleContext(0, ResourceSpecificationContext);
    }
    public SWITCH(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SWITCH, 0);
    }
    public LBRACE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LBRACE, 0);
    }
    public RBRACE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RBRACE, 0);
    }
    public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
    public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext | null;
    public switchBlockStatementGroup(i?: number): SwitchBlockStatementGroupContext[] | SwitchBlockStatementGroupContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SwitchBlockStatementGroupContext);
        }

        return this.getRuleContext(i, SwitchBlockStatementGroupContext);
    }
    public switchLabel(): SwitchLabelContext[];
    public switchLabel(i: number): SwitchLabelContext | null;
    public switchLabel(i?: number): SwitchLabelContext[] | SwitchLabelContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SwitchLabelContext);
        }

        return this.getRuleContext(i, SwitchLabelContext);
    }
    public SYNCHRONIZED(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SYNCHRONIZED, 0);
    }
    public RETURN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RETURN, 0);
    }
    public THROW(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.THROW, 0);
    }
    public BREAK(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.BREAK, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public CONTINUE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.CONTINUE, 0);
    }
    public YIELD(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.YIELD, 0);
    }
    public switchExpression(): SwitchExpressionContext | null {
        return this.getRuleContext(0, SwitchExpressionContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_statement;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CatchClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CATCH(): antlr.TerminalNode {
        return this.getToken(JavaParser.CATCH, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.LPAREN, 0)!;
    }
    public catchType(): CatchTypeContext {
        return this.getRuleContext(0, CatchTypeContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.RPAREN, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public variableModifier(): VariableModifierContext[];
    public variableModifier(i: number): VariableModifierContext | null;
    public variableModifier(i?: number): VariableModifierContext[] | VariableModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }

        return this.getRuleContext(i, VariableModifierContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_catchClause;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterCatchClause) {
             listener.enterCatchClause(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitCatchClause) {
             listener.exitCatchClause(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitCatchClause) {
            return visitor.visitCatchClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CatchTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext[];
    public qualifiedName(i: number): QualifiedNameContext | null;
    public qualifiedName(i?: number): QualifiedNameContext[] | QualifiedNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }

        return this.getRuleContext(i, QualifiedNameContext);
    }
    public BITOR(): antlr.TerminalNode[];
    public BITOR(i: number): antlr.TerminalNode | null;
    public BITOR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.BITOR);
    	} else {
    		return this.getToken(JavaParser.BITOR, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_catchType;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterCatchType) {
             listener.enterCatchType(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitCatchType) {
             listener.exitCatchType(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitCatchType) {
            return visitor.visitCatchType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FinallyBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FINALLY(): antlr.TerminalNode {
        return this.getToken(JavaParser.FINALLY, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_finallyBlock;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterFinallyBlock) {
             listener.enterFinallyBlock(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitFinallyBlock) {
             listener.exitFinallyBlock(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitFinallyBlock) {
            return visitor.visitFinallyBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ResourceSpecificationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.LPAREN, 0)!;
    }
    public resources(): ResourcesContext {
        return this.getRuleContext(0, ResourcesContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.RPAREN, 0)!;
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_resourceSpecification;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterResourceSpecification) {
             listener.enterResourceSpecification(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitResourceSpecification) {
             listener.exitResourceSpecification(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitResourceSpecification) {
            return visitor.visitResourceSpecification(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ResourcesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public resource(): ResourceContext[];
    public resource(i: number): ResourceContext | null;
    public resource(i?: number): ResourceContext[] | ResourceContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }

        return this.getRuleContext(i, ResourceContext);
    }
    public SEMI(): antlr.TerminalNode[];
    public SEMI(i: number): antlr.TerminalNode | null;
    public SEMI(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.SEMI);
    	} else {
    		return this.getToken(JavaParser.SEMI, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_resources;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterResources) {
             listener.enterResources(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitResources) {
             listener.exitResources(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitResources) {
            return visitor.visitResources(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ResourceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.ASSIGN, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public classOrInterfaceType(): ClassOrInterfaceTypeContext | null {
        return this.getRuleContext(0, ClassOrInterfaceTypeContext);
    }
    public variableDeclaratorId(): VariableDeclaratorIdContext | null {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    }
    public VAR(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.VAR, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public variableModifier(): VariableModifierContext[];
    public variableModifier(i: number): VariableModifierContext | null;
    public variableModifier(i?: number): VariableModifierContext[] | VariableModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }

        return this.getRuleContext(i, VariableModifierContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_resource;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterResource) {
             listener.enterResource(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitResource) {
             listener.exitResource(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitResource) {
            return visitor.visitResource(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SwitchBlockStatementGroupContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public switchLabel(): SwitchLabelContext[];
    public switchLabel(i: number): SwitchLabelContext | null;
    public switchLabel(i?: number): SwitchLabelContext[] | SwitchLabelContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SwitchLabelContext);
        }

        return this.getRuleContext(i, SwitchLabelContext);
    }
    public blockStatement(): BlockStatementContext[];
    public blockStatement(i: number): BlockStatementContext | null;
    public blockStatement(i?: number): BlockStatementContext[] | BlockStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockStatementContext);
        }

        return this.getRuleContext(i, BlockStatementContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_switchBlockStatementGroup;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterSwitchBlockStatementGroup) {
             listener.enterSwitchBlockStatementGroup(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitSwitchBlockStatementGroup) {
             listener.exitSwitchBlockStatementGroup(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitSwitchBlockStatementGroup) {
            return visitor.visitSwitchBlockStatementGroup(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SwitchLabelContext extends antlr.ParserRuleContext {
    public _constantExpression?: ExpressionContext;
    public _enumConstantName?: Token | null;
    public _varName?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CASE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.CASE, 0);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(JavaParser.COLON, 0)!;
    }
    public typeType(): TypeTypeContext | null {
        return this.getRuleContext(0, TypeTypeContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.IDENTIFIER, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DEFAULT, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_switchLabel;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterSwitchLabel) {
             listener.enterSwitchLabel(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitSwitchLabel) {
             listener.exitSwitchLabel(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitSwitchLabel) {
            return visitor.visitSwitchLabel(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ForControlContext extends antlr.ParserRuleContext {
    public _forUpdate?: ExpressionListContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enhancedForControl(): EnhancedForControlContext | null {
        return this.getRuleContext(0, EnhancedForControlContext);
    }
    public SEMI(): antlr.TerminalNode[];
    public SEMI(i: number): antlr.TerminalNode | null;
    public SEMI(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.SEMI);
    	} else {
    		return this.getToken(JavaParser.SEMI, i);
    	}
    }
    public forInit(): ForInitContext | null {
        return this.getRuleContext(0, ForInitContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public expressionList(): ExpressionListContext | null {
        return this.getRuleContext(0, ExpressionListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_forControl;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterForControl) {
             listener.enterForControl(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitForControl) {
             listener.exitForControl(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitForControl) {
            return visitor.visitForControl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ForInitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public localVariableDeclaration(): LocalVariableDeclarationContext | null {
        return this.getRuleContext(0, LocalVariableDeclarationContext);
    }
    public expressionList(): ExpressionListContext | null {
        return this.getRuleContext(0, ExpressionListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_forInit;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterForInit) {
             listener.enterForInit(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitForInit) {
             listener.exitForInit(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitForInit) {
            return visitor.visitForInit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnhancedForControlContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableDeclaratorId(): VariableDeclaratorIdContext {
        return this.getRuleContext(0, VariableDeclaratorIdContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(JavaParser.COLON, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public typeType(): TypeTypeContext | null {
        return this.getRuleContext(0, TypeTypeContext);
    }
    public VAR(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.VAR, 0);
    }
    public variableModifier(): VariableModifierContext[];
    public variableModifier(i: number): VariableModifierContext | null;
    public variableModifier(i?: number): VariableModifierContext[] | VariableModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }

        return this.getRuleContext(i, VariableModifierContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_enhancedForControl;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterEnhancedForControl) {
             listener.enterEnhancedForControl(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitEnhancedForControl) {
             listener.exitEnhancedForControl(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitEnhancedForControl) {
            return visitor.visitEnhancedForControl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_parExpression;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterParExpression) {
             listener.enterParExpression(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitParExpression) {
             listener.exitParExpression(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitParExpression) {
            return visitor.visitParExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_expressionList;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterExpressionList) {
             listener.enterExpressionList(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitExpressionList) {
             listener.exitExpressionList(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitExpressionList) {
            return visitor.visitExpressionList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MethodCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.RPAREN, 0)!;
    }
    public expressionList(): ExpressionListContext | null {
        return this.getRuleContext(0, ExpressionListContext);
    }
    public THIS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.THIS, 0);
    }
    public SUPER(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SUPER, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_methodCall;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterMethodCall) {
             listener.enterMethodCall(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitMethodCall) {
             listener.exitMethodCall(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitMethodCall) {
            return visitor.visitMethodCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public _prefix?: Token | null;
    public _bop?: Token | null;
    public _postfix?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primary(): PrimaryContext | null {
        return this.getRuleContext(0, PrimaryContext);
    }
    public methodCall(): MethodCallContext | null {
        return this.getRuleContext(0, MethodCallContext);
    }
    public NEW(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.NEW, 0);
    }
    public creator(): CreatorContext | null {
        return this.getRuleContext(0, CreatorContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LPAREN, 0);
    }
    public typeType(): TypeTypeContext[];
    public typeType(i: number): TypeTypeContext | null;
    public typeType(i?: number): TypeTypeContext[] | TypeTypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeTypeContext);
        }

        return this.getRuleContext(i, TypeTypeContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RPAREN, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public BITAND(): antlr.TerminalNode[];
    public BITAND(i: number): antlr.TerminalNode | null;
    public BITAND(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.BITAND);
    	} else {
    		return this.getToken(JavaParser.BITAND, i);
    	}
    }
    public ADD(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.ADD, 0);
    }
    public SUB(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SUB, 0);
    }
    public INC(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.INC, 0);
    }
    public DEC(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DEC, 0);
    }
    public TILDE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.TILDE, 0);
    }
    public BANG(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.BANG, 0);
    }
    public lambdaExpression(): LambdaExpressionContext | null {
        return this.getRuleContext(0, LambdaExpressionContext);
    }
    public switchExpression(): SwitchExpressionContext | null {
        return this.getRuleContext(0, SwitchExpressionContext);
    }
    public COLONCOLON(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.COLONCOLON, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public typeArguments(): TypeArgumentsContext | null {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    public classType(): ClassTypeContext | null {
        return this.getRuleContext(0, ClassTypeContext);
    }
    public MUL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.MUL, 0);
    }
    public DIV(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DIV, 0);
    }
    public MOD(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.MOD, 0);
    }
    public LT(): antlr.TerminalNode[];
    public LT(i: number): antlr.TerminalNode | null;
    public LT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.LT);
    	} else {
    		return this.getToken(JavaParser.LT, i);
    	}
    }
    public GT(): antlr.TerminalNode[];
    public GT(i: number): antlr.TerminalNode | null;
    public GT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.GT);
    	} else {
    		return this.getToken(JavaParser.GT, i);
    	}
    }
    public LE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LE, 0);
    }
    public GE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.GE, 0);
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.EQUAL, 0);
    }
    public NOTEQUAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.NOTEQUAL, 0);
    }
    public CARET(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.CARET, 0);
    }
    public BITOR(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.BITOR, 0);
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.AND, 0);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.OR, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.COLON, 0);
    }
    public QUESTION(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.QUESTION, 0);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.ASSIGN, 0);
    }
    public ADD_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.ADD_ASSIGN, 0);
    }
    public SUB_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SUB_ASSIGN, 0);
    }
    public MUL_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.MUL_ASSIGN, 0);
    }
    public DIV_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DIV_ASSIGN, 0);
    }
    public AND_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.AND_ASSIGN, 0);
    }
    public OR_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.OR_ASSIGN, 0);
    }
    public XOR_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.XOR_ASSIGN, 0);
    }
    public RSHIFT_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RSHIFT_ASSIGN, 0);
    }
    public URSHIFT_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.URSHIFT_ASSIGN, 0);
    }
    public LSHIFT_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LSHIFT_ASSIGN, 0);
    }
    public MOD_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.MOD_ASSIGN, 0);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DOT, 0);
    }
    public THIS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.THIS, 0);
    }
    public innerCreator(): InnerCreatorContext | null {
        return this.getRuleContext(0, InnerCreatorContext);
    }
    public SUPER(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SUPER, 0);
    }
    public superSuffix(): SuperSuffixContext | null {
        return this.getRuleContext(0, SuperSuffixContext);
    }
    public explicitGenericInvocation(): ExplicitGenericInvocationContext | null {
        return this.getRuleContext(0, ExplicitGenericInvocationContext);
    }
    public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | null {
        return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
    }
    public LBRACK(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LBRACK, 0);
    }
    public RBRACK(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RBRACK, 0);
    }
    public INSTANCEOF(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.INSTANCEOF, 0);
    }
    public pattern(): PatternContext | null {
        return this.getRuleContext(0, PatternContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_expression;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeType(): TypeTypeContext {
        return this.getRuleContext(0, TypeTypeContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public variableModifier(): VariableModifierContext[];
    public variableModifier(i: number): VariableModifierContext | null;
    public variableModifier(i?: number): VariableModifierContext[] | VariableModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }

        return this.getRuleContext(i, VariableModifierContext);
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_pattern;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterPattern) {
             listener.enterPattern(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitPattern) {
             listener.exitPattern(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitPattern) {
            return visitor.visitPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LambdaExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lambdaParameters(): LambdaParametersContext {
        return this.getRuleContext(0, LambdaParametersContext)!;
    }
    public ARROW(): antlr.TerminalNode {
        return this.getToken(JavaParser.ARROW, 0)!;
    }
    public lambdaBody(): LambdaBodyContext {
        return this.getRuleContext(0, LambdaBodyContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_lambdaExpression;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterLambdaExpression) {
             listener.enterLambdaExpression(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitLambdaExpression) {
             listener.exitLambdaExpression(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitLambdaExpression) {
            return visitor.visitLambdaExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LambdaParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RPAREN, 0);
    }
    public formalParameterList(): FormalParameterListContext | null {
        return this.getRuleContext(0, FormalParameterListContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public lambdaLVTIList(): LambdaLVTIListContext | null {
        return this.getRuleContext(0, LambdaLVTIListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_lambdaParameters;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterLambdaParameters) {
             listener.enterLambdaParameters(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitLambdaParameters) {
             listener.exitLambdaParameters(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitLambdaParameters) {
            return visitor.visitLambdaParameters(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LambdaBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_lambdaBody;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterLambdaBody) {
             listener.enterLambdaBody(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitLambdaBody) {
             listener.exitLambdaBody(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitLambdaBody) {
            return visitor.visitLambdaBody(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LPAREN, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RPAREN, 0);
    }
    public THIS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.THIS, 0);
    }
    public SUPER(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SUPER, 0);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public typeTypeOrVoid(): TypeTypeOrVoidContext | null {
        return this.getRuleContext(0, TypeTypeOrVoidContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DOT, 0);
    }
    public CLASS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.CLASS, 0);
    }
    public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | null {
        return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
    }
    public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext | null {
        return this.getRuleContext(0, ExplicitGenericInvocationSuffixContext);
    }
    public arguments(): ArgumentsContext | null {
        return this.getRuleContext(0, ArgumentsContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_primary;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterPrimary) {
             listener.enterPrimary(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitPrimary) {
             listener.exitPrimary(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitPrimary) {
            return visitor.visitPrimary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SwitchExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SWITCH(): antlr.TerminalNode {
        return this.getToken(JavaParser.SWITCH, 0)!;
    }
    public parExpression(): ParExpressionContext {
        return this.getRuleContext(0, ParExpressionContext)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.RBRACE, 0)!;
    }
    public switchLabeledRule(): SwitchLabeledRuleContext[];
    public switchLabeledRule(i: number): SwitchLabeledRuleContext | null;
    public switchLabeledRule(i?: number): SwitchLabeledRuleContext[] | SwitchLabeledRuleContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SwitchLabeledRuleContext);
        }

        return this.getRuleContext(i, SwitchLabeledRuleContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_switchExpression;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterSwitchExpression) {
             listener.enterSwitchExpression(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitSwitchExpression) {
             listener.exitSwitchExpression(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitSwitchExpression) {
            return visitor.visitSwitchExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SwitchLabeledRuleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CASE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.CASE, 0);
    }
    public switchRuleOutcome(): SwitchRuleOutcomeContext {
        return this.getRuleContext(0, SwitchRuleOutcomeContext)!;
    }
    public ARROW(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.ARROW, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.COLON, 0);
    }
    public expressionList(): ExpressionListContext | null {
        return this.getRuleContext(0, ExpressionListContext);
    }
    public NULL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.NULL_LITERAL, 0);
    }
    public guardedPattern(): GuardedPatternContext | null {
        return this.getRuleContext(0, GuardedPatternContext);
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DEFAULT, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_switchLabeledRule;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterSwitchLabeledRule) {
             listener.enterSwitchLabeledRule(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitSwitchLabeledRule) {
             listener.exitSwitchLabeledRule(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitSwitchLabeledRule) {
            return visitor.visitSwitchLabeledRule(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GuardedPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LPAREN, 0);
    }
    public guardedPattern(): GuardedPatternContext | null {
        return this.getRuleContext(0, GuardedPatternContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RPAREN, 0);
    }
    public typeType(): TypeTypeContext | null {
        return this.getRuleContext(0, TypeTypeContext);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public variableModifier(): VariableModifierContext[];
    public variableModifier(i: number): VariableModifierContext | null;
    public variableModifier(i?: number): VariableModifierContext[] | VariableModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }

        return this.getRuleContext(i, VariableModifierContext);
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public AND(): antlr.TerminalNode[];
    public AND(i: number): antlr.TerminalNode | null;
    public AND(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.AND);
    	} else {
    		return this.getToken(JavaParser.AND, i);
    	}
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_guardedPattern;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterGuardedPattern) {
             listener.enterGuardedPattern(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitGuardedPattern) {
             listener.exitGuardedPattern(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitGuardedPattern) {
            return visitor.visitGuardedPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SwitchRuleOutcomeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public blockStatement(): BlockStatementContext[];
    public blockStatement(i: number): BlockStatementContext | null;
    public blockStatement(i?: number): BlockStatementContext[] | BlockStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockStatementContext);
        }

        return this.getRuleContext(i, BlockStatementContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_switchRuleOutcome;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterSwitchRuleOutcome) {
             listener.enterSwitchRuleOutcome(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitSwitchRuleOutcome) {
             listener.exitSwitchRuleOutcome(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitSwitchRuleOutcome) {
            return visitor.visitSwitchRuleOutcome(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public classOrInterfaceType(): ClassOrInterfaceTypeContext | null {
        return this.getRuleContext(0, ClassOrInterfaceTypeContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DOT, 0);
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public typeArguments(): TypeArgumentsContext | null {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_classType;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterClassType) {
             listener.enterClassType(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitClassType) {
             listener.exitClassType(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitClassType) {
            return visitor.visitClassType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | null {
        return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
    }
    public createdName(): CreatedNameContext {
        return this.getRuleContext(0, CreatedNameContext)!;
    }
    public classCreatorRest(): ClassCreatorRestContext | null {
        return this.getRuleContext(0, ClassCreatorRestContext);
    }
    public arrayCreatorRest(): ArrayCreatorRestContext | null {
        return this.getRuleContext(0, ArrayCreatorRestContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_creator;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterCreator) {
             listener.enterCreator(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitCreator) {
             listener.exitCreator(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitCreator) {
            return visitor.visitCreator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreatedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext[];
    public typeArgumentsOrDiamond(i: number): TypeArgumentsOrDiamondContext | null;
    public typeArgumentsOrDiamond(i?: number): TypeArgumentsOrDiamondContext[] | TypeArgumentsOrDiamondContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentsOrDiamondContext);
        }

        return this.getRuleContext(i, TypeArgumentsOrDiamondContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.DOT);
    	} else {
    		return this.getToken(JavaParser.DOT, i);
    	}
    }
    public primitiveType(): PrimitiveTypeContext | null {
        return this.getRuleContext(0, PrimitiveTypeContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_createdName;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterCreatedName) {
             listener.enterCreatedName(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitCreatedName) {
             listener.exitCreatedName(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitCreatedName) {
            return visitor.visitCreatedName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InnerCreatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public classCreatorRest(): ClassCreatorRestContext {
        return this.getRuleContext(0, ClassCreatorRestContext)!;
    }
    public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext | null {
        return this.getRuleContext(0, NonWildcardTypeArgumentsOrDiamondContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_innerCreator;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterInnerCreator) {
             listener.enterInnerCreator(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitInnerCreator) {
             listener.exitInnerCreator(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitInnerCreator) {
            return visitor.visitInnerCreator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArrayCreatorRestContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACK(): antlr.TerminalNode[];
    public LBRACK(i: number): antlr.TerminalNode | null;
    public LBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.LBRACK);
    	} else {
    		return this.getToken(JavaParser.LBRACK, i);
    	}
    }
    public RBRACK(): antlr.TerminalNode[];
    public RBRACK(i: number): antlr.TerminalNode | null;
    public RBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.RBRACK);
    	} else {
    		return this.getToken(JavaParser.RBRACK, i);
    	}
    }
    public arrayInitializer(): ArrayInitializerContext | null {
        return this.getRuleContext(0, ArrayInitializerContext);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_arrayCreatorRest;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterArrayCreatorRest) {
             listener.enterArrayCreatorRest(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitArrayCreatorRest) {
             listener.exitArrayCreatorRest(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitArrayCreatorRest) {
            return visitor.visitArrayCreatorRest(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassCreatorRestContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arguments(): ArgumentsContext {
        return this.getRuleContext(0, ArgumentsContext)!;
    }
    public classBody(): ClassBodyContext | null {
        return this.getRuleContext(0, ClassBodyContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_classCreatorRest;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterClassCreatorRest) {
             listener.enterClassCreatorRest(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitClassCreatorRest) {
             listener.exitClassCreatorRest(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitClassCreatorRest) {
            return visitor.visitClassCreatorRest(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExplicitGenericInvocationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
        return this.getRuleContext(0, NonWildcardTypeArgumentsContext)!;
    }
    public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
        return this.getRuleContext(0, ExplicitGenericInvocationSuffixContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_explicitGenericInvocation;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterExplicitGenericInvocation) {
             listener.enterExplicitGenericInvocation(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitExplicitGenericInvocation) {
             listener.exitExplicitGenericInvocation(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitExplicitGenericInvocation) {
            return visitor.visitExplicitGenericInvocation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeArgumentsOrDiamondContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LT, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.GT, 0);
    }
    public typeArguments(): TypeArgumentsContext | null {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeArgumentsOrDiamond;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterTypeArgumentsOrDiamond) {
             listener.enterTypeArgumentsOrDiamond(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitTypeArgumentsOrDiamond) {
             listener.exitTypeArgumentsOrDiamond(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitTypeArgumentsOrDiamond) {
            return visitor.visitTypeArgumentsOrDiamond(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NonWildcardTypeArgumentsOrDiamondContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LT, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.GT, 0);
    }
    public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | null {
        return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterNonWildcardTypeArgumentsOrDiamond) {
             listener.enterNonWildcardTypeArgumentsOrDiamond(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitNonWildcardTypeArgumentsOrDiamond) {
             listener.exitNonWildcardTypeArgumentsOrDiamond(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitNonWildcardTypeArgumentsOrDiamond) {
            return visitor.visitNonWildcardTypeArgumentsOrDiamond(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NonWildcardTypeArgumentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(JavaParser.LT, 0)!;
    }
    public typeList(): TypeListContext {
        return this.getRuleContext(0, TypeListContext)!;
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(JavaParser.GT, 0)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_nonWildcardTypeArguments;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterNonWildcardTypeArguments) {
             listener.enterNonWildcardTypeArguments(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitNonWildcardTypeArguments) {
             listener.exitNonWildcardTypeArguments(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitNonWildcardTypeArguments) {
            return visitor.visitNonWildcardTypeArguments(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeType(): TypeTypeContext[];
    public typeType(i: number): TypeTypeContext | null;
    public typeType(i?: number): TypeTypeContext[] | TypeTypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeTypeContext);
        }

        return this.getRuleContext(i, TypeTypeContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeList;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterTypeList) {
             listener.enterTypeList(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitTypeList) {
             listener.exitTypeList(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitTypeList) {
            return visitor.visitTypeList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classOrInterfaceType(): ClassOrInterfaceTypeContext | null {
        return this.getRuleContext(0, ClassOrInterfaceTypeContext);
    }
    public primitiveType(): PrimitiveTypeContext | null {
        return this.getRuleContext(0, PrimitiveTypeContext);
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public LBRACK(): antlr.TerminalNode[];
    public LBRACK(i: number): antlr.TerminalNode | null;
    public LBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.LBRACK);
    	} else {
    		return this.getToken(JavaParser.LBRACK, i);
    	}
    }
    public RBRACK(): antlr.TerminalNode[];
    public RBRACK(i: number): antlr.TerminalNode | null;
    public RBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.RBRACK);
    	} else {
    		return this.getToken(JavaParser.RBRACK, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeType;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterTypeType) {
             listener.enterTypeType(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitTypeType) {
             listener.exitTypeType(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitTypeType) {
            return visitor.visitTypeType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimitiveTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.BOOLEAN, 0);
    }
    public CHAR(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.CHAR, 0);
    }
    public BYTE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.BYTE, 0);
    }
    public SHORT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SHORT, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.INT, 0);
    }
    public LONG(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LONG, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.FLOAT, 0);
    }
    public DOUBLE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DOUBLE, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_primitiveType;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterPrimitiveType) {
             listener.enterPrimitiveType(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitPrimitiveType) {
             listener.exitPrimitiveType(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitPrimitiveType) {
            return visitor.visitPrimitiveType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeArgumentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(JavaParser.LT, 0)!;
    }
    public typeArgument(): TypeArgumentContext[];
    public typeArgument(i: number): TypeArgumentContext | null;
    public typeArgument(i?: number): TypeArgumentContext[] | TypeArgumentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentContext);
        }

        return this.getRuleContext(i, TypeArgumentContext);
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(JavaParser.GT, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeArguments;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterTypeArguments) {
             listener.enterTypeArguments(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitTypeArguments) {
             listener.exitTypeArguments(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitTypeArguments) {
            return visitor.visitTypeArguments(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SuperSuffixContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arguments(): ArgumentsContext | null {
        return this.getRuleContext(0, ArgumentsContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DOT, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public typeArguments(): TypeArgumentsContext | null {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_superSuffix;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterSuperSuffix) {
             listener.enterSuperSuffix(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitSuperSuffix) {
             listener.exitSuperSuffix(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitSuperSuffix) {
            return visitor.visitSuperSuffix(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExplicitGenericInvocationSuffixContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SUPER(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SUPER, 0);
    }
    public superSuffix(): SuperSuffixContext | null {
        return this.getRuleContext(0, SuperSuffixContext);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public arguments(): ArgumentsContext | null {
        return this.getRuleContext(0, ArgumentsContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_explicitGenericInvocationSuffix;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterExplicitGenericInvocationSuffix) {
             listener.enterExplicitGenericInvocationSuffix(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitExplicitGenericInvocationSuffix) {
             listener.exitExplicitGenericInvocationSuffix(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitExplicitGenericInvocationSuffix) {
            return visitor.visitExplicitGenericInvocationSuffix(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgumentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.RPAREN, 0)!;
    }
    public expressionList(): ExpressionListContext | null {
        return this.getRuleContext(0, ExpressionListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_arguments;
    }
    public override enterRule(listener: JavaParserListener): void {
        if(listener.enterArguments) {
             listener.enterArguments(this);
        }
    }
    public override exitRule(listener: JavaParserListener): void {
        if(listener.exitArguments) {
             listener.exitArguments(this);
        }
    }
    public override accept<Result>(visitor: JavaParserVisitor<Result>): Result | null {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
