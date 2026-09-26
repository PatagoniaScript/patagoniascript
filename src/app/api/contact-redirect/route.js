import { NextResponse } from 'next/server';

export async function GET(request) {
  const phoneNumber = process.env.WHATSAPP_NUMBER;

  if (!phoneNumber) {
    return NextResponse.json(
      { error: 'WhatsApp number not configured' },
      { status: 500 },
    );
  }

  const { searchParams } = new URL(request.url);
  const planName = searchParams.get('plan');
  const projectName = searchParams.get('project');
  const featureNames = searchParams.get('features');
  const estimatedPrice = searchParams.get('price');

  let messageText =
    '¡Hola, PatagoniaScript! Me interesa cotizar un proyecto web.';

  if (projectName) {
    const features = featureNames
      ? featureNames
          .split('|')
          .map((feature) => `- ${feature}`)
          .join('\n')
      : '- Sin funcionalidades adicionales';
    messageText = `¡Hola, PatagoniaScript! Me interesa un ${projectName}.\n\nFuncionalidades:\n${features}\n\nPresupuesto estimado: USD ${estimatedPrice || '0'}`;
  } else if (planName) {
    messageText = `¡Hola, PatagoniaScript! Me interesa el plan "${planName}". ¿Podemos conversar sobre los detalles?`;
  }

  const targetUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;

  return NextResponse.redirect(targetUrl);
}
