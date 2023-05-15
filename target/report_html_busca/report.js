$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/cep.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "escolher cep",
  "description": "como cliente desejo escolher cep\npara facilitar frete",
  "id": "escolher-cep",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 7,
  "name": "cep invalido",
  "description": "",
  "id": "escolher-cep;cep-invalido",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 8,
  "name": "que estou no site da amazom",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "digito cep invalido",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "pede cep válido",
  "keyword": "Entao "
});
formatter.match({
  "location": "CepSteps.queEstouNoSiteDaAmazom()"
});
formatter.result({
  "duration": 26420804311,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.CepSteps\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 33 more\nCaused by: org.openqa.selenium.remote.http.ConnectionFailedException: Unable to establish websocket connection to http://localhost:39777/devtools/browser/0083c96d-bd62-4d8d-9fa5-54b18128e798\nBuild info: version: \u00274.7.1\u0027, revision: \u0027c6795baf1a3\u0027\nSystem info: os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.19.0-41-generic\u0027, java.version: \u002711.0.19\u0027\nDriver info: driver.version: ChromeDriver\n\tat org.openqa.selenium.remote.http.netty.NettyWebSocket.\u003cinit\u003e(NettyWebSocket.java:102)\n\tat org.openqa.selenium.remote.http.netty.NettyWebSocket.lambda$create$3(NettyWebSocket.java:128)\n\tat org.openqa.selenium.remote.http.netty.NettyClient.openSocket(NettyClient.java:107)\n\tat org.openqa.selenium.devtools.Connection.\u003cinit\u003e(Connection.java:78)\n\tat org.openqa.selenium.chromium.ChromiumDriver.lambda$new$2(ChromiumDriver.java:116)\n\tat java.base/java.util.Optional.map(Optional.java:265)\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:114)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:81)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:49)\n\tat pageObjects.PesquisaPage.\u003cinit\u003e(PesquisaPage.java:14)\n\tat steps.CepSteps.\u003cinit\u003e(CepSteps.java:14)\n\t... 38 more\n",
  "status": "failed"
});
formatter.match({
  "location": "CepSteps.digitoCepInvalido()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CepSteps.pedeCepVálido()"
});
formatter.result({
  "status": "skipped"
});
});