/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.5.43
 * Generated at: 2021-01-04 02:40:47 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.views.user;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class findId_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = null;
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
      throws java.io.IOException, javax.servlet.ServletException {

    final java.lang.String _jspx_method = request.getMethod();
    if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method) && !javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
      response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSPs only permit GET POST or HEAD");
      return;
    }

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("<!DOCTYPE html>\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("<meta charset=\"UTF-8\">\r\n");
      out.write("<title>직산 가정의학 의원</title>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("<h1 align=\"center\">아이디 찾기</h1>\r\n");
      out.write("<div>아이디를 잊으셨나요? <br>\r\n");
      out.write("아이디 찾기 방법을 선택해주세요. </div>\r\n");
      out.write("<div>\r\n");
      out.write("내 명의(이름)로 가입된 휴대폰 인증\r\n");
      out.write("내 명의(이름)로 가입한 아이디와, 이름/휴대폰 번호가 일치한 아이디를 찾습니다.\r\n");
      out.write("<input type=\"button\" value=\"본인인증\">\r\n");
      out.write("<br>\r\n");
      out.write("이름 / 생년월일 / 성별로 찾기 \r\n");
      out.write("<br>\r\n");
      out.write("<input type=\"text\" placeholder=\"이름을 입력해 주세요.\" name=\"fIdNm\"> &nbsp;\r\n");
      out.write("<select name=\"gender\">\r\n");
      out.write("\t<option value=\"M\">남자</option>\r\n");
      out.write("\t<option value=\"F\">여자</option>\r\n");
      out.write("</select>\r\n");
      out.write("<br>\r\n");
      out.write("<input type=\"text\" placeholder=\"yyyy\" name=\"birthday\"> &nbsp;\r\n");
      out.write("<input type=\"text\" placeholder=\"mm\" name=\"birthday\" list=\"month\">\r\n");
      out.write("<datalist id=\"month\">\r\n");
      out.write("\t<option value=\"01\">\r\n");
      out.write("\t<option value=\"02\">\r\n");
      out.write("\t<option value=\"03\">\r\n");
      out.write("\t<option value=\"04\">\r\n");
      out.write("\t<option value=\"05\">\r\n");
      out.write("\t<option value=\"06\">\r\n");
      out.write("\t<option value=\"07\">\r\n");
      out.write("\t<option value=\"08\">\r\n");
      out.write("\t<option value=\"09\">\r\n");
      out.write("\t<option value=\"10\">\r\n");
      out.write("\t<option value=\"11\">\r\n");
      out.write("\t<option value=\"12\">\r\n");
      out.write("</datalist> &nbsp;\r\n");
      out.write("<input type=\"text\" placeholder=\"dd\" name=\"birthday\" list=\"day\">\r\n");
      out.write("<datalist id=\"day\">\r\n");
      out.write("\t<option value=\"01\">\r\n");
      out.write("\t<option value=\"02\">\r\n");
      out.write("\t<option value=\"03\">\r\n");
      out.write("\t<option value=\"04\">\r\n");
      out.write("\t<option value=\"05\">\r\n");
      out.write("\t<option value=\"06\">\r\n");
      out.write("\t<option value=\"07\">\r\n");
      out.write("\t<option value=\"08\">\r\n");
      out.write("\t<option value=\"09\">\r\n");
      out.write("\t<option value=\"10\">\r\n");
      out.write("\t<option value=\"11\">\r\n");
      out.write("\t<option value=\"12\">\r\n");
      out.write("\t<option value=\"13\">\r\n");
      out.write("\t<option value=\"14\">\r\n");
      out.write("\t<option value=\"15\">\r\n");
      out.write("\t<option value=\"16\">\r\n");
      out.write("\t<option value=\"17\">\r\n");
      out.write("\t<option value=\"18\">\r\n");
      out.write("\t<option value=\"19\">\r\n");
      out.write("\t<option value=\"20\">\r\n");
      out.write("\t<option value=\"21\">\r\n");
      out.write("\t<option value=\"22\">\r\n");
      out.write("\t<option value=\"23\">\r\n");
      out.write("\t<option value=\"24\">\r\n");
      out.write("\t<option value=\"25\">\r\n");
      out.write("\t<option value=\"26\">\r\n");
      out.write("\t<option value=\"27\">\r\n");
      out.write("\t<option value=\"28\">\r\n");
      out.write("\t<option value=\"29\">\r\n");
      out.write("\t<option value=\"30\">\r\n");
      out.write("\t<option value=\"31\">\r\n");
      out.write("</datalist> &nbsp;\r\n");
      out.write("<input type=\"button\" name=\"user_id\" value=\"다음 단계\">\r\n");
      out.write("<br>비빌번호를 찾으시나요? <a href=\"/jiksan/views/user/findPw.jsp\">비밀번호 찾기 ▸\r\n");
      out.write("</div>\r\n");
      out.write("</body>\r\n");
      out.write("</html>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}